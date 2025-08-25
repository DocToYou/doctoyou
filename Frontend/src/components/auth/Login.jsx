import axiosClient from '../../axiosConfig'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Login = ({ changeToSignUp }) => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [isValidLoginForm, setIsValidLoginForm] = useState(false)
    const loginForm = useRef(null)

    const checkFormValidity = () => {
        const currForm = loginForm.current
        if (currForm) setIsValidLoginForm(currForm.checkValidity())
    }

    const handleLoginSubmit = async e => {
        e.preventDefault()
        const form = loginForm.current
        const data = new FormData(form)
        try {
            let res = await axiosClient.post('/login', {phone: data.get('phone'), password: data.get('password')})
            if (res.status == 200) {
                localStorage.setItem('userName', res.data.userName)
                navigate('/')
            }
            else if (res.status === 404){
                setError(res.data.message)
            }
        } catch (error) {
            console.log(error.message)
            setError('wrong credentials')
        }
    }

    return (<div className='flex flex-col gap-4 justify-center'>
        <h1 className='text-[22px] font-extrabold text-blue-800'>Welcome back</h1>
        <p>Dont't wait days for doctor. Getinstant care from top professionals - anytime, anywhere.</p>
        <form ref={loginForm} onSubmit={handleLoginSubmit} onChange={checkFormValidity} className='flex flex-col gap-5 m-0'>
            <div className="flex flex-col">
                <label className='text-[15px]' htmlFor="mobile">Phone number</label>
                <div className="flex items-center w-full border rounded">
                <span className="px-4 py-3 bg-gray-100 text-[14px] border-r">+91</span>
                <input className='w-full px-5 py-3 placeholder:text-[14px]' type="tel" name="phone" id="mobile" placeholder='Enter your phone no' required pattern="[6-9]\d{9}" maxLength={10} />
            </div>
            </div>
            <div>
                <label className='text-[15px]'  htmlFor="password">Password</label>
                <input className='w-full border-1 px-5 py-3 rounded mr-3 placeholder:text-[14px]' type="password" name="password" id="password" placeholder='Enter the password' required minLength={6} maxLength={20} />
                <div className='text-sm lg:text-base flex justify-between mx-1 my-2 lg:m-2'>
                    <label htmlFor="checkbox"><input className='h-3 ' type="checkbox" name="checkbox" id="checkbox" />Remember me</label>
                    <p className='text-red-500 cursor-pointer'>Forgot your password?</p>
                </div>
            </div>
            <p className={`text-red-500 ${error ? '' : 'hidden'}`}>{error}</p>
            <button className={`mx-auto w-[80%] border-1 py-3 rounded-[10px] text-white ${isValidLoginForm ? 'bg-blue-800 cursor-pointer' :
                'bg-gray-400 cursor-not-allowed'}`}>Login</button>
        </form>
        <p>Don't have an account? [<Link to={'/auth/signup'}><span onClick={() => changeToSignUp(true)} className='text-blue-600 cursor-pointer'>Sign Up</span></Link>]</p>
    </div>)
}
