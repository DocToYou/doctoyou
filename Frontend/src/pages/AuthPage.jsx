import React, { useState } from 'react'
import { SignUp } from '../components/SignUp'
import { Login } from '../components/Login'

export const AuthPage = () => {
    const [showSignUp, setShowSignUp] = useState(false)
    return (
        <div className='flex w-screen bg-[#1815A1]' style={{'height' : '100dvh'}}>
            <div className="bg-white l rounded-3xl px-5 py-5 my-10 mx-10 lg:mx-20 w-[100vw] md:w-1/3">
                {!showSignUp && <Login changeToSignUp={setShowSignUp}/>}
                {showSignUp && <SignUp changeToLogin={setShowSignUp}/>}
            </div>
            <div className='w-2/3 lg:ml-20 hidden md:block md:ml-0'>
                <img className='h-[100%]' src="auth/img.png" alt="" />
            </div>
        </div>
    )
}
