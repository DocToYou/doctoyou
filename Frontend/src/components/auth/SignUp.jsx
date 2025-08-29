import React, { useEffect, useRef, useState } from "react";
import axiosClient from "../../axiosConfig";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const SignUp = ({
  changeToLogin,
  changeToOtp,
  formData,
  setFormData,
}) => {
  const [isValidSignUpForm, setIsValidSignUpForm] = useState(false);
  const [ShowPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const signUpForm = useRef(null);

  useEffect(() => {
    const currForm = signUpForm.current;
    if (currForm) setIsValidSignUpForm(currForm.checkValidity());
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setIsLoading(true);
    const data = new FormData(signUpForm.current);
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
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
    changeToOtp();
  };

  return (
    <div className="flex flex-col justify-center h-full">
      <h1 className="text-[25px] font-bold text-blue-800 text-center">
        Create Your Account
      </h1>
      <form
        ref={signUpForm}
        onSubmit={handleSignUpSubmit}
        className="mt-1 flex flex-col gap-3"
      >
        <div>
          <label>Name*</label>
          <div className="flex gap-4">
            <input
              className="border-1 w-1/2 px-3 py-2 rounded"
              value={formData.fname || ""}
              onChange={handleChange}
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
              value={formData.lname || ""}
              onChange={handleChange}
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
            value={formData.gender || ""}
            onChange={handleChange}
            name="gender"
            id="gender"
            required
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
            value={formData.phone}
            onChange={handleChange}
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
            value={formData.email || ""}
            onChange={handleChange}
            type="email"
            name="email"
            id="mail"
            placeholder="Enter Your Mail Id"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Create New Password</label>
          <div className="relative">
            <input
              className="w-full border-1 px-5 py-2 rounded mr-3"
              value={formData.password || ""}
              onChange={handleChange}
              type={ShowPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter New Password"
              required
              minLength={6}
              maxLength={20}
            />
            <span
              className="absolute right-3 top-1.5 cursor-pointer"
              onClick={() => setShowPassword(!ShowPassword)}
            >
              {ShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="relative">
            <input
              className="w-full border-1 px-5 py-2 rounded mr-3"
              value={formData.confirmpassword || ""}
              onChange={handleChange}
              type={ShowPassword ? "text" : "password"}
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Enter Your Password"
              required
              minLength={6}
              maxLength={20}
            />
            <span
              className="absolute right-3 top-1.5 cursor-pointer"
              onClick={() => setShowPassword(!ShowPassword)}
            >
              {ShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
        </div>
        <button
          className={`mt-3 mx-auto w-[80%] border py-2 rounded-[10px] text-white flex justify-center items-center gap-2
    ${isValidSignUpForm ? "bg-blue-800 cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`}
        >
          {isLoading && (
            <div
              className="w-5 h-5 rounded-full border-4 border-white border-t-transparent animate-spin"
              aria-label="Loading"
            ></div>
          )}
          Sign Up
        </button>
        <p>
          Already have an account? [{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={changeToLogin}
          >
            Login
          </span>{" "}
          ]
        </p>
      </form>
    </div>
  );
};
