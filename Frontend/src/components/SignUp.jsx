import React, { useRef, useState } from 'react'
import axios from 'axios'
import Otp from './Otp'

export const SignUp = ({ changeToLogin }) => {

  const [isValidSignUpForm, setIsValidSignUpForm] = useState(false)
  const [isPasswordMatch, SetIsPasswordMatch] = useState(true)
  const [isOtpSent, setIsOtpSent] = useState(true)
  const [mobileNo, setMobileNo] = useState('')
  const [otp, setOtp] = useState('')
  // const [otpError, setOtpError] = useState('wwwwww')
  const [fullNumber, setFullNumber] = useState(null);
  const [otpTime, setOtpTime] = useState(60)
  const signUpFrom = useRef(null)
  const checkFormValidity = () => {
    const currForm = signUpFrom.current
    SetIsPasswordMatch(currForm.password.value === currForm.confirmpassword.value)
    if (currForm) setIsValidSignUpForm(currForm.checkValidity())
  }

  const handleSignUpSubmit = async e => {
    e.preventDefault()
    const data = new FormData(signUpFrom.current)
    try {
      let res = await axios.post('http://localhost:3000/register', {
        fname: data.get('fname'), lname: data.get('lname'), email: data.get('email'),
        gender: data.get('gender'), phone: data.get('phone'), password: data.get('password'), confirmPassword: data.get('confirmpassword')
      })
      setFullNumber(data.get('phone'));
    } catch (error) {
      console.log(error.message)
    }
    setMobileNo(data.get('phone').substring(6))
    setIsOtpSent(true)
    startOtpTimer()
  }

  const handleOtpSubmit = async () => {
    try {
      if (otp.length == 4) {
        const res = await axios.post('http://localhost:3000/verifyOtp', { otp: otp, phone: Number(fullNumber) })
        if (res.status === 200) {
          changeToLogin(false)
        }
      }
    } catch (error) {

    }
  }

  const handleOtpChange = (code) => {
    setOtp(code)
  }

  const startOtpTimer = () => {
    let startTime = 60
    const timer = setInterval(() => {
      setOtpTime(--startTime)
      if (startTime == 0) clearInterval(timer)
    }, 1000)
  }


  return (
    <>
      {isOtpSent ?
        <div className='flex flex-col gap-3 items-center justify-center h-full'>
          <h1 className='text-3xl lg:text-2xl font-bold text-center text-blue-800'>Verify Your Mobile Number</h1>
          <div>
            <p className='hidden lg:block'>{`we've sent a 4-digitcode to +91 xxxxxx${mobileNo}`}</p>
            <p className='text-center lg:hidden'>we've sent a 4-digitcode to</p>
            <p className='text-center lg:hidden'>{`+91 xxxxxx${mobileNo}`}</p>
            <p>Enter the code below to continue</p>
          </div>
          <p>{"00:" + otpTime}</p>
          <Otp onChangeOTP={handleOtpChange} />
          <button onClick={handleOtpSubmit} className={`w-[90%] py-2 bg-blue-800 rounded text-white ${otp.length == 4 ? 'opacity-100 cursor-pointer' : 'opacity-50'}`}>Verify</button>
          <p>Didn't receive the code? [<span className='text-blue-800 cursor-pointer'>Resend OTP</span>]</p>
        </div>
        :
        <div className='flex flex-col justify-center h-full'>
          <h1 className='text-[25px] font-bold text-blue-800 text-center'>Create Your Account</h1>
          <form ref={signUpFrom} onSubmit={handleSignUpSubmit} className='mt-3 flex flex-col gap-3.5' onChange={checkFormValidity}>
            <div>
              <label htmlFor="name">Name*</label>
              <div className='flex gap-4'>
                <input className='border-1 w-1/2 px-3 py-2 rounded' type="text" name="fname" id="name" placeholder='First name' required pattern='[a-zA-Z]+' maxLength={15} />
                <input className='border-1 w-1/2 px-3 py-2 rounded' type="text" name="lname" id="lastname" placeholder='Last name' required pattern='[a-zA-Z]+' maxLength={15} />
              </div>
            </div>
            <div>
              <label htmlFor="gender">Gender</label><br />
              <select className='w-full border-1 rounded pl-5 py-2' name="gender" id="gender" required>
                <option value="" disabled selected>Select Your Gender</option>
                <option value="Male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="mobile">Mobile no*</label><br />
              <input className='w-full border-1 px-5 py-2 rounded' type="tel" name="phone" id="mobile" placeholder='(+91) xxxxxxxxxx' required pattern="[6-9]\d{9}" maxLength={10} />
            </div>
            <div className='mt-2'>
              <label htmlFor="mail">Mail Id</label>
              <input className='w-full border-1 px-5 py-2 rounded mr-3' type="email" name="email" id="mail" placeholder='Enter Your Mail Id' required />
            </div>
            <div>
              <label htmlFor="password">Create New Password</label>
              <input className='w-full border-1 px-5 py-2 rounded mr-3' type="password" name="password" id="password" placeholder='Enter New Password' required minLength={6} maxLength={20} />
            </div>
            <div>
              <label className={!isPasswordMatch && isValidSignUpForm && 'text-red-600'} htmlFor="password">{!isPasswordMatch && isValidSignUpForm ? 'Please Enter Correct Password' : 'Confirm Password'}</label>
              <input className='w-full border-1 px-5 py-2 rounded mr-3' type="password" name="confirmpassword" id="confirmpassword" placeholder='Enter Your Password' required minLength={6} maxLength={20} />
            </div>
            <button className={`mt-3 mx-auto w-[80%] border-1 py-2 rounded-[10px] text-white ${isValidSignUpForm ? 'bg-blue-800 cursor-pointer' :
              'bg-gray-400 cursor-not-allowed'}`}>Sign Up</button>
          </form></div>}

    </>
  )
}
