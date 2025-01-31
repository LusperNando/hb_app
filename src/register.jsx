import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import star from "./images/Star 1.svg";
import Navigation from "./nav";
import Footer from "./Footer";

const Account = () => {
  const navigate = useNavigate();
  const [RegisterData, setRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...RegisterData, [name]: value });
  };

  const validatePassword = (value) => {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!regex.test(value)) {
      setError(
        "Password must be at least 8 characters long, include 1 uppercase letter, and 1 number."
      );
    } else {
      setError("");
    }
  };

  const validateConfirmPassword = (value) => {
    if (value !== password) {
      setConfirmError("Passwords do not match.");
    } else {
      setConfirmError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
    validateConfirmPassword(confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    validateConfirmPassword(value);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = new FormData();
    Object.entries({ ...RegisterData, password }).forEach(([key, value]) =>
      formData.append(key, value)
    );

    try {
      await axios.post("http://localhost:3000/user/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Account created successfully!");
      navigate("/");
    } catch (error) {
      alert("Failed to create account.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
  
      <div className="flex flex-col sm:flex-row justify-between items-center mt-3 px-4 sm:px-12">
        <p className="font-Poppins text-sm sm:text-lg font-medium text-gray-600 md:ml-[14vh] ">
          Business Reg No: BRN-R7TAWMK
        </p>
        <p className="font-Poppins text-sm sm:text-lg font-medium text-gray-600 mt-2 sm:mt-0 md:mr-[12vh]">
          Email ID: hbspacelt@gmail.com
        </p>
      </div>

      
      <Navigation />

  
      <form
        onSubmit={handlesubmit}
        className="flex justify-center items-center px-4 sm:px-0 mt-8 sm:mt-12 flex-grow mb-12"
      >
        <div className="border-t-2 border-b-2 border-red-500 w-full max-w-[90%] sm:max-w-[35%] md:max-w-[40%] lg:max-w-[42%] shadow-xl rounded-lg bg-white md:mb-0 mb-8">
        
          <div className=" p-4 text-center ">
            <div className="flex justify-start items-center ml-1">
              <img src={star} alt="star" width={26} height={24} className="mr-1" />
              <p className="font-Poppins font-bold text-xl sm:text-2xl text-red-500 ">
                REGISTER
              </p>
            </div>
          </div>

      
          <div className="p-6">
    
            <div className="mb-4">
              <label className="flex justify-start font-Poppins font-medium text-sm sm:text-md text-gray-600">
                Enter Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
                onChange={handlechange}
                className="font-medium text-sm sm:text-md text-gray-800 border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-500 w-full rounded"
              />
            </div>

    
            <div className="mb-4">
              <label className="flex justify-start font-Poppins font-medium text-sm sm:text-md text-gray-600">
                Enter Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@gmail.com"
                onChange={handlechange}
                className="font-medium text-sm sm:text-md text-gray-800 border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-500 w-full rounded"
              />
            </div>

    
            <div className="mb-4">
              <label className="flex justify-start font-Poppins font-medium text-sm sm:text-md text-gray-600">
                Mobile Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                placeholder="Enter your mobile number"
                onChange={handlechange}
                className="font-medium text-sm sm:text-md text-gray-800 border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-red-500 w-full rounded"
              />
            </div>

      
            <div className="mb-4">
              <label className="flex justify-start font-Poppins font-medium text-sm sm:text-md text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                className={`font-medium text-sm sm:text-md text-gray-800 border ${
                  error ? "border-red-500" : "border-gray-300"
                } p-2 focus:outline-none focus:ring-2 ${
                  error ? "focus:ring-red-500" : "focus:ring-blue-500"
                } w-full rounded`}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

        
            <div className="mb-6">
              <label className="flex justify-start font-Poppins font-medium text-sm sm:text-md text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className={`font-medium text-sm sm:text-md text-gray-800 border ${
                  confirmError ? "border-red-500" : "border-gray-300"
                } p-2 focus:outline-none focus:ring-2 ${
                  confirmError ? "focus:ring-red-500" : "focus:ring-blue-500"
                } w-full rounded`}
              />
              {confirmError && (
                <p className="text-red-500 text-sm mt-2">{confirmError}</p>
              )}
            </div>

    
            <button
              type="submit"
              className="font-medium hover:bg-gray-200 border hover:border-red-500 bg-red-500 p-2 hover:text-red-500 focus:outline-none focus:ring-1 text-white w-full rounded"
            >
              REGISTER
            </button>

            {/* Login Link */}
            <div className="flex justify-center mt-4">
              <label className="font-Poppins font-regular text-sm sm:text-base text-gray-800">
                Already have an account?
                <Link
                  to="/signin"
                  className="ml-1 font-medium hover:text-red-500"
                >
                  Login here
                </Link>
              </label>
            </div>
          </div>
        </div>
      </form>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Account;