import axiosClient from '../../axiosConfig'
import React, { useRef, useState, useEffect } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const ResetPassword = ({ changeToLogin, changeToOtp, formData, setFormData }) => {

    useEffect(() => {
        const currForm = loginForm.current;
        if (currForm) setIsValidForm(currForm.checkValidity());
    }, [formData])

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [ShowPassword, setShowPassword] = useState(false);
    const [isValidForm, setIsValidForm] = useState(false);
    const loginForm = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        changeToOtp()
        const form = loginForm.current;
        const data = new FormData(form);
        try {
            let res = await axiosClient.post("/reset", {
                phone: data.get("phone"),
                password: data.get("password"),
            });
            if (res.status == 200) {
                changeToOtp()
            } else if (res.status === 404) {
                setError(res.data.message);
            }
        } catch (error) {
            console.log(error.message);
            setError("Wrong Credentials");
        }
        finally { setIsLoading(false) }
    };
    return (
        <div className="flex flex-col gap-4 justify-center">
            <h1 className="text-[22px] font-extrabold text-blue-800">
                Reset Your Password
            </h1>

            <form
                ref={loginForm}
                onSubmit={handleSubmit}
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
                    <label htmlFor="password">Create New Password</label>
                    <div className="relative">
                        <input
                            className="w-full border-1 px-5 py-3 rounded mr-3"
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
                        <span className='absolute right-3 top-2.5 cursor-pointer' onClick={() => setShowPassword(!ShowPassword)}>
                            {ShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </span>
                    </div>
                </div>
                <div>
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <div className="relative">
                        <input
                            className="w-full border-1 px-5 py-3 rounded mr-3"
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
                        <span className='absolute right-3 top-2.5 cursor-pointer' onClick={() => setShowPassword(!ShowPassword)}>
                            {ShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </span>
                    </div>
                </div>

                <p className={`text-red-500 ${error ? "" : "hidden"}`}>{error}</p>
                <button
                    className={`mx-auto w-[80%] border-1 py-3 rounded-[10px] text-white flex justify-center items-center gap-2 ${isValidForm
                        ? "bg-blue-800 cursor-pointer"
                        : "bg-gray-400 cursor-not-allowed"
                        }`}
                >
                    {isLoading && <div
                        className="w-5 h-5 rounded-full border-4 border-white border-t-transparent animate-spin"
                        aria-label="Loading"
                    ></div>}
                    Verify
                </button>
            </form>

            <p className="text-blue-600 cursor-pointer" onClick={changeToLogin}>
                Back To Login
            </p>
        </div>
    )
}
