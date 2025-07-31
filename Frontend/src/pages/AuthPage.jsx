import React, { useState } from 'react'
import { SignUp } from '../components/SignUp'
import { Login } from '../components/Login'

export const AuthPage = () => {
    const [showSignUp, setShowSignUp] = useState(false)
    return (
        <div className='flex w-screen h-screen bg-[#1815A1]'>
            <div className="bg-white l rounded-3xl px-10 py-5 my-5 mx-5 lg:mx-20 w-[100vw] md:w-1/3">
                {!showSignUp && <Login changeToSignUp={setShowSignUp}/>}
                {showSignUp && <SignUp changeToLogin={setShowSignUp}/>}
            </div>
            <div className='w-2/3 lg:ml-20 hidden md:block md:ml-0'>
                <img className='h-[100%]' src="/img.png" alt="" />
            </div>
        </div>
    )
}
