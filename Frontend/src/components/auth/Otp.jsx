import React, { useEffect, useState } from "react";
import OtpInput from "./OtpInput";
import axiosClient from "../../axiosConfig";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const Otp = ({ backTosignUp, mobileNo, backToLogin }) => {
  const startOtpTimer = () => {
    let time = 30;
    const timer = setInterval(() => {
      setOtpTime(--time);
      if (time == 0) clearInterval(timer);
    }, 1000);
  };

  useEffect(() => startOtpTimer(), []);
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpTime, setOtpTime] = useState(30);

  const handleOtpSubmit = async () => {
    setOtpError("");
    setIsLoading(true);
    try {
      if (otp.length == 4) {
        const res = await axiosClient.post("/verifyOtp", {
          otp: otp,
          phone: Number(mobileNo),
        });
        if (res.status === 200){
          backToLogin();
        }
        else {
          setOtpError("Invalid OTP. Please try again.");
        }
      }
    } catch (error) {
      setOtpError("Invalid OTP. Please try again.");
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleOtpChange = (code) => {
    setOtp(code);
  };

  const handleResendOtp = () => {
    console.log(mobileNo);
    setOtpTime(30);
    startOtpTimer();
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center lg:py-15">
      <h1 className="text-3xl lg:text-2xl font-bold text-center text-blue-800">
        Verify Your Mobile Number
      </h1>
      <div>
        <p className="hidden lg:block">{`we've sent a 4-digitcode to +91 xxxxxx${mobileNo.substring(6)}`}</p>
        <p className="text-center lg:hidden">we've sent a 4-digitcode to</p>
        <p className="text-center lg:hidden">{`+91 xxxxxx${mobileNo.substring(6)}`}</p>
        <p>Enter the code below to continue</p>
      </div>
      <OtpInput onChangeOTP={handleOtpChange} otpError={otpError} />
      {otpError && <p className="text-red-600 text-sm">{otpError}</p>}
      <button
        onClick={handleOtpSubmit}
        className={`w-[80%] py-2 bg-blue-800 rounded text-white flex justify-center items-center gap-2 cursor-pointer ${otp.length == 4 ? "opacity-100" : "opacity-50"}`}
      >
        {isLoading && (
          <div
            className="w-5 h-5 rounded-full border-4 border-white border-t-transparent animate-spin"
            aria-label="Loading"
          ></div>
        )}
        Verify
      </button>
      <button
        onClick={handleResendOtp}
        className={`text-blue-800 cursor-pointer ${otpTime === 0 ? "opacity-100" : "opacity-50"}`}
        disabled={otpTime !== 0}
      >
        Resend OTP {otpTime > 0 && <span>({"00:" + otpTime})</span>}
      </button>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={backTosignUp}
      >
        <KeyboardBackspaceIcon sx={{ fontSize: 20 }} />
        <span>Edit Info</span>
      </div>
    </div>
  );
};
