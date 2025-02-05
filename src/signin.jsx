import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navigation from "./nav";
import Footer from "./Footer.jsx";
import axios from "axios";
import { useAuth } from './AuthContext';
import { FaStar } from "react-icons/fa";

const SignIn = () => {
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsAuthenticated } = useAuth();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...LoginData, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        LoginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { access_token } = response.data;
      console.log("API Response:", response.data);

      if (access_token) {
        localStorage.setItem("token", access_token);
        setIsAuthenticated(true);
        const from = location.state?.from || "/";
        navigate(from, { replace: true });
      } else {
        alert("Failed to login. Please try again.");
      }
    } catch (error) {
      alert("Failed to Login. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-center mt-3 px-4 sm:px-12">
        <p className="font-Poppins text-sm sm:text-lg font-medium text-gray-600 md:ml-[13vh]">
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
        <div className="border-t-2 border-b-2 border-[#1E024D]  w-full max-w-[90%] sm:max-w-[35%] md:max-w-[40%] lg:max-w-[40%] shadow-xl rounded-lg bg-white">
          <div className="p-4 text-center ">
            <div className="flex justify-start items-center ml-1">
              <FaStar className="text-2xl shadow-lg text-[#1E024D]" />
              <p className="font-Poppins font-bold text-xl sm:text-2xl text-[#330386]  ms-1">
                SIGN IN
              </p>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-4">
              <label className="flex text-gray-800 justify-start font-Poppins font-medium md:text-md sm:text-md text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handlechange}
                className="border border-gray-200 text-gray-500 p-2 focus:outline-none focus:border-blue-500 font-semibold text-[2vh] border-gray-300 font-Poppins w-full rounded mt-2"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="flex text-gray-800 justify-start font-Poppins font-medium text-sm sm:text-md text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handlechange}
                className="border border-gray-200 text-gray-800 p-2 focus:outline-none focus:border-blue-500 border-gray-300 font-semibold text-[2vh] font-Poppins w-full rounded mt-2"
                placeholder="Enter your password"
              />
            </div>

            <div className="text-right mb-6">
              <button className="font-Poppins font-medium text-sm sm:text-md hover:text-[#330386] text-gray-600">
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="font-medium bg-gradient-to-r from-[#330386] to-purple-900 hover:from-purple-900 hover:to-[#330386] p-2 focus:outline-none focus:ring-1 text-white w-full rounded"
            >
              LOGIN
            </button>

            <div className="flex justify-center mt-4">
              <label className="font-Poppins font-regular text-sm sm:text-base text-gray-800">
                Don't have an account?
                <Link
                  to="/register"
                  className="ml-1 font-medium hover:text-[#330386]"
                >
                  Register
                </Link>
              </label>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default SignIn;