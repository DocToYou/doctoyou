import React, { useState } from "react";

function AuthPage() {
  const [authMode, setAuthMode] = useState("login");
  // "login" | "signup" | "otp"

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    otp: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // ✅ Call backend API for login
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    // ✅ Call backend API to send OTP
    setAuthMode("otp"); // move to OTP verification after signup
  };

  const handleOtpVerify = (e) => {
    e.preventDefault();
    console.log("OTP entered:", formData.otp);
    // ✅ Call backend API to verify OTP
    alert("OTP Verified! Account created ✅");
    setAuthMode("login"); // redirect to login after success
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {authMode === "login" && (
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
            <p>
              Don’t have an account?{" "}
              <span onClick={() => setAuthMode("signup")}>Sign Up</span>
            </p>
          </form>
        )}

        {authMode === "signup" && (
          <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account?{" "}
              <span onClick={() => setAuthMode("login")}>Login</span>
            </p>
          </form>
        )}

        {authMode === "otp" && (
          <form onSubmit={handleOtpVerify}>
            <h2>OTP Verification</h2>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleChange}
              required
            />
            <button type="submit">Verify OTP</button>
            <p>
              Didn’t get OTP?{" "}
              <span onClick={() => alert("Resend OTP logic")}>Resend</span>
            </p>
            <p>
              Entered wrong number?{" "}
              <span onClick={() => setAuthMode("signup")}>Change Number</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
