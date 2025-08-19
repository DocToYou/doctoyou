import React, { useEffect, useRef, useState } from "react";
import axiosClient from "../../axiosConfig";
import Otp from "./Otp";

export const SignUp = ({ changeToLogin }) => {
  const [isValidSignUpForm, setIsValidSignUpForm] = useState(false);
  const [isPasswordMatch, SetIsPasswordMatch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [mobileNo, setMobileNo] = useState("");
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpTime, setOtpTime] = useState(30);
  const signUpForm = useRef(null);

  const checkFormValidity = () => {
    const currForm = signUpForm.current;
    SetIsPasswordMatch(
      currForm.password.value === currForm.confirmpassword.value,
    );
    if (currForm) setIsValidSignUpForm(currForm.checkValidity());
  };

  const handleSignUpSubmit = async (e) => {
    console.log("submit button");
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(signUpForm.current);
    setMobileNo(data.get("phone"));
    try {
      let res = await axiosClient.post("/register", {
        fname: data.get("fname"),
        lname: data.get("lname"),
        email: data.get("email"),
        gender: data.get("gender"),
        phone: data.get("phone"),
        password: data.get("password"),
        confirmPassword: data.get("confirmpassword"),
      });
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
    setIsOtpSent(true);
    startOtpTimer();
  };

  const handleOtpSubmit = async () => {
    setIsLoading(true);
    try {
      if (otp.length == 4) {
        const res = await axiosClient.post("/verifyOtp", {
          otp: otp,
          phone: Number(mobileNo),
        });
        if (res.status === 200) {
          changeToLogin(false);
        } else {
          setOtpError("Invalid OTP. Please try again.");
        }
      }
    } catch (error) {
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

  const startOtpTimer = () => {
    let time = 30;
    const timer = setInterval(() => {
      setOtpTime(--time);
      if (time == 0) clearInterval(timer);
    }, 1000);
  };

  return (
    <>
      {isOtpSent ? (
        <div className="flex flex-col gap-5 items-center justify-center lg:py-30">
          <h1 className="text-3xl lg:text-2xl font-bold text-center text-blue-800">
            Verify Your Mobile Number
          </h1>
          <div>
            <p className="hidden lg:block">{`we've sent a 4-digitcode to +91 xxxxxx${mobileNo.substring(6)}`}</p>
            <p className="text-center lg:hidden">we've sent a 4-digitcode to</p>
            <p className="text-center lg:hidden">{`+91 xxxxxx${mobileNo.substring(6)}`}</p>
            <p>Enter the code below to continue</p>
          </div>
          <Otp onChangeOTP={handleOtpChange} />
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
        </div>
      ) : (
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-[25px] font-bold text-blue-800 text-center">
            Create Your Account
          </h1>
          <form
            ref={signUpForm}
            onSubmit={handleSignUpSubmit}
            className="mt-1 flex flex-col gap-3"
            onChange={checkFormValidity}
          >
            <div>
              <label>Name*</label>
              <div className="flex gap-4">
                <input
                  className="border-1 w-1/2 px-3 py-2 rounded"
                  type="text"
                  name="fname"
                  id="name"
                  placeholder="First name"
                  required
                  pattern="[a-zA-Z]+"
                  maxLength={25}
                />
                <input
                  className="border-1 w-1/2 px-3 py-2 rounded"
                  type="text"
                  name="lname"
                  id="lastname"
                  placeholder="Last name"
                  required
                  pattern="[a-zA-Z]+"
                  maxLength={15}
                />
              </div>
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <br />
              <select
                className="w-full border-1 rounded pl-5 py-2"
                name="gender"
                id="gender"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select Your Gender
                </option>
                <option value="Male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="mobile">Mobile no*</label>
              <br />
              <input
                className="w-full border-1 px-5 py-2 rounded"
                type="tel"
                name="phone"
                id="mobile"
                placeholder="(+91) xxxxxxxxxx"
                required
                pattern="[6-9]\d{9}"
                maxLength={10}
              />
            </div>
            <div className="mt-2">
              <label htmlFor="mail">Mail Id</label>
              <input
                className="w-full border-1 px-5 py-2 rounded mr-3"
                type="email"
                name="email"
                id="mail"
                placeholder="Enter Your Mail Id"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Create New Password</label>
              <input
                className="w-full border-1 px-5 py-2 rounded mr-3"
                type="password"
                name="password"
                id="password"
                placeholder="Enter New Password"
                required
                minLength={6}
                maxLength={20}
              />
            </div>
            <div>
              <label
                className={
                  !isPasswordMatch && isValidSignUpForm
                    ? "text-red-600"
                    : undefined
                }
                htmlFor="confirmpassword"
              >
                {!isPasswordMatch && isValidSignUpForm
                  ? "Please Enter Correct Password"
                  : "Confirm Password"}
              </label>
              <input
                className="w-full border-1 px-5 py-2 rounded mr-3"
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Enter Your Password"
                required
                minLength={6}
                maxLength={20}
              />
            </div>
            <button
              className={`mt-3 mx-auto w-[80%] border py-2 rounded-[10px] text-white flex justify-center items-center gap-2
    ${isValidSignUpForm ? "bg-blue-800 cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`}
              disabled={!isValidSignUpForm || isLoading}
            >
              {isLoading && (
                <div
                  className="w-5 h-5 rounded-full border-4 border-white border-t-transparent animate-spin"
                  aria-label="Loading"
                ></div>
              )}
              Sign Up
            </button>
          </form>
        </div>
      )}
    </>
  );
};
