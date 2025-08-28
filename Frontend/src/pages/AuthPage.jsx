import React, { useState, useEffect } from 'react'
import { SignUp } from '../components/auth/SignUp'
import { Login } from '../components/auth/Login'
import { Otp } from '../components/auth/Otp'
import { ResetPassword } from '../components/auth/ResetPassword'
import pic1 from '../assets/auth/pic1.svg'
import pic2 from '../assets/auth/pic2.svg'
import pic3 from '../assets/auth/pic3.svg'

export const AuthPage = () => {
    const [mode, setMode] = useState("otp")
    const [formData, setFormData] = useState({ fname: "", lname: "", gender: "", phone: "", email: "", password: "" })

    return (
        <div className='flex bg-[#1815A1] min-h-screen'>

            {/* forms */}
            <div className='flex flex-col justify-center lg:my-10 mx-10 md:mx-auto mb-10 lg:mx-20 md:w-1/2 lg:w-1/3'>
                <div className={`my-10 text-center text-white text-5xl ${mode === "signup" && 'lg:hidden'}`}>DOC2YOU</div>
                <div className="bg-white rounded-3xl px-5 py-5 lg:py-5">

                    {mode === "login" && <Login
                        changeToSignUp={() => setMode("signup")}
                        changeToReset={() => setMode("reset")}
                        formData={formData}
                        setFormData={setFormData}
                    />}

                    {mode === "reset" && <ResetPassword
                        changeToLogin={() => setMode("login")}
                        changeToOtp={() => setMode("otp")}
                        formData={formData}
                        setFormData={setFormData}
                    />}

                    {mode === "signup" && <SignUp
                        changeToLogin={() => setMode("login")}
                        changeToOtp={() => setMode("otp")}
                        formData={formData}
                        setFormData={setFormData}
                    />}

                    {mode === "otp" && <Otp
                        mobileNo={formData.phone}
                        backTosignUp={() => setMode("signup")}
                    />}

                </div>
            </div>

            {/* photo model */}
            <div className="w-2/3 hidden lg:block relative overflow-hidden lg:scale-100">
                <div className="w-[200px] h-[200px] border-2 border-white rounded-full absolute top-[-15%] left-[10%]"></div>
                <div className="w-[150px] h-[150px] border-2 border-white rounded-full absolute top-[30%] left-[90%]"></div>
                <div className="w-[150px] h-[150px] border-2 border-white rounded-full absolute bottom-[-10%] right-[10%]"></div>
                <div className="w-190 h-190 border border-amber-50 rounded-full absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                    <div className="z-1 w-100 h-100 border border-amber-50 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src={pic1} alt="" className='p-7' />
                    </div>
                    <div className="w-70 h-70 border border-amber-50 rounded-full absolute left-90 top-8">
                        <img src={pic3} alt="" className='pt-3 pl-2 pr-1' />
                    </div>
                    <div className="z-2 w-50 h-50 border border-amber-50 rounded-full absolute top-110 left-35">
                        <img src={pic2} alt="" className='pb-2 pl-1' />
                    </div>
                    <div className='bg-white relative h-15 w-15 rounded-full top-50 left-40'></div>
                    <div className='bg-white absolute h-13 w-13 rounded-full bottom-45 right-40'></div>
                    <div className='bg-white absolute h-8 w-8 rounded-full bottom-35 right-55'></div>
                </div>
            </div>

        </div>
    )
}
