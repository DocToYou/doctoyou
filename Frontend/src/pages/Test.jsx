import React, { useEffect, useState } from 'react';

const RESEND_DELAY = 60; // seconds

function Test() {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const storedTime = localStorage.getItem('otpSentTime');

    if (storedTime) {
      const secondsPassed = Math.floor((Date.now() - Number(storedTime)) / 1000);
      const remaining = RESEND_DELAY - secondsPassed;
      setTimeLeft(remaining > 0 ? remaining : 0);
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleResend = () => {
    if (timeLeft === 0) {
      localStorage.setItem('otpSentTime', Date.now().toString());
      setTimeLeft(RESEND_DELAY);
    }
  };

  return (
    <div className="text-center mt-4">
      {timeLeft > 0 ? (
        <p className="text-gray-500">Resend OTP in {timeLeft}s</p>
      ) : (
        <button className="text-blue-600 font-semibold">
          Resend OTP {timeLeft}s
        </button>
      )}
    </div>
  );
}

export default Test;
