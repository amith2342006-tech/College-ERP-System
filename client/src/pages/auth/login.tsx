// Placeholder complete Login.tsx
// NOTE: This is a starter version that compiles.
// Replace image path if needed.

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import collegeImage from "../../assets/images/college login img.png";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

  // Clear previous error
  setError("");

  // Check Email
  if (email.trim() === "") {
    setError("Email is required.");
    return;
  }

  // Check Password
  if (password.trim() === "") {
    setError("Password is required.");
    return;
  }

  // Email Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    setError("Please enter a valid email address.");
    return;
  }

  // Loading Animation
  setLoading(true);

  // Fake Login Delay
  setTimeout(() => {

    setLoading(false);

    if (
      email === "admin@college.com" &&
      password === "admin123"
    ) {

      console.log("Login Successful!");

      navigate("/dashboard");

      // Later we will navigate to Dashboard

    } else {

      setError("Invalid Email or Password");

    }

  }, 1500);

};

const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">
      <div className="w-2/5 bg-blue-600 text-white flex flex-col items-center justify-center p-10">
        <h1 className="text-5xl font-bold">College ERP System</h1>
        <p className="mt-4 text-blue-100">Smart Campus Management</p>

        <img
          src={collegeImage}
          alt="College ERP"
          className="w-96 mt-12"
        />

      </div>

      <div className="w-3/5 bg-gray-100 flex items-center justify-center">
        <div className="bg-white w-[450px] rounded-2xl shadow-xl p-8">
          <h2 className="text-4xl font-bold text-center">Welcome Back</h2>
          <p className="text-center text-gray-500 mt-2">Sign in to continue</p>

          <label className="block mt-8 mb-2 font-medium">Email Address</label>
          <div className="flex items-center border rounded-lg px-3">
            <FaEnvelope className="text-gray-400"/>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label className="block mt-6 mb-2 font-medium">Password</label>
          <div className="flex items-center border rounded-lg px-3">
            <FaLock className="text-gray-400"/>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full p-3 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={()=>setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </button>
          </div>

          <div className="flex justify-between mt-5 text-sm">
            <label><input type="checkbox" className="mr-2"/>Remember Me</label>
            <a href="#" className="text-blue-600">Forgot Password?</a>
          </div>

          {error && (
            <p className="text-red-600 text-sm mt-4">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 disabled:bg-gray-400"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center mt-6 text-sm">
            Don't have an account? <a href="#" className="text-blue-600">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
