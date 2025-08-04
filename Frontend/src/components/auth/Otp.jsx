import React, { useRef, useState } from 'react';

const Otp = ({ length = 4, onChangeOTP }) => {
    const inputsRef = useRef([]);
    const [otp, setOtp] = useState(new Array(length).fill(''));

    const handleChange = (value, index) => {

        const char = value.slice(-1);
        const newOtp = [...otp];
        newOtp[index] = char;
        setOtp(newOtp);
        onChangeOTP?.(newOtp.join(''));


        if (char && index < length - 1) {
            requestAnimationFrame(() => {
                inputsRef.current[index + 1]?.focus();
            });
        }
    };



    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    return (
        <div className="flex gap-3">
            {otp.map((digit, idx) => (
                <input
                    key={idx}
                    ref={(el) => (inputsRef.current[idx] = el)}
                    type="number"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className="w-12 h-12 text-center border border-gray-400 rounded text-xl font-semibold focus:outline-blue-500"
                />
            ))}
        </div>
    );
};

export default Otp;
