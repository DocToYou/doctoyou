import axiosClient from "../../../axiosConfig";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const Login = ({
  changeToSignUp,
  changeToReset,
  formData,
  setFormData,
}) => {
  useEffect(() => {
    const currForm = loginForm.current;
    if (currForm) setIsValidLoginForm(currForm.checkValidity());
  }, [formData]);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const [isValidLoginForm, setIsValidLoginForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const loginForm = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const form = loginForm.current;
    const data = new FormData(form);
    try {
      let res = await axiosClient.post("/login", {
        phone: data.get("phone"),
        password: data.get("password"),
      });
      if (res.status == 200) {
        localStorage.setItem("userName", res.data.userName);
        navigate("/");
      } else if (res.status === 404) {
        setError(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      setError("Wrong Credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center">
      <h1 className="text-[22px] font-extrabold text-blue-800">Welcome back</h1>
      <p>
        Dont't wait days for doctor. Getinstant care from top professionals -
        anytime, anywhere.
      </p>
      <form
        ref={loginForm}
        onSubmit={handleLoginSubmit}
        className="flex flex-col gap-5 m-0"
      >
        <div className="flex flex-col">
          <label className="text-[15px]" htmlFor="mobile">
            Phone number
          </label>
          <div className="flex items-center w-full border rounded">
            <span className="px-4 py-3 bg-gray-100 text-[14px] border-r">
              +91
            </span>
            <input
              className="w-full px-5 py-3 placeholder:text-[14px]"
              value={formData.phone || ""}
              onChange={handleChange}
              type="tel"
              name="phone"
              id="mobile"
              placeholder="Enter your phone no"
              required
              pattern="[6-9]\d{9}"
              maxLength={10}
            />
          </div>
        </div>
        <div>
          <label className="text-[15px]" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="w-full border-1 px-5 py-3 rounded mr-3 placeholder:text-[14px]"
              value={formData.password || ""}
              onChange={handleChange}
              type={ShowPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter the password"
              required
              minLength={6}
              maxLength={20}
            />
            <span
              className="absolute right-3 top-2.5 cursor-pointer"
              onClick={() => setShowPassword(!ShowPassword)}
            >
              {ShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
          <div className="text-sm lg:text-base flex justify-between mx-1 my-2 lg:m-2">
            <label htmlFor="checkbox">
              <input
                className="h-3 "
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              Remember me
            </label>
            <p className="text-red-500 cursor-pointer" onClick={changeToReset}>
              Forgot your password?
            </p>
          </div>
        </div>
        <p className={`text-red-500 text-center ${error ? "" : "hidden"}`}>
          {error}
        </p>
        <button
          className={`mx-auto w-[80%] border-1 py-3 rounded-[10px] text-white flex justify-center items-center gap-2 ${
            isValidLoginForm
              ? "bg-blue-800 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {isLoading && (
            <div
              className="w-5 h-5 rounded-full border-4 border-white border-t-transparent animate-spin"
              aria-label="Loading"
            ></div>
          )}
          Login
        </button>
      </form>
      <p>
        Don't have an account? [{" "}
        <span className="text-blue-600 cursor-pointer" onClick={changeToSignUp}>
          Sign Up
        </span>{" "}
        ]
      </p>
    </div>
  );
};
