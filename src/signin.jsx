import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import star from "./images/Star 1.svg";
import Navigation from "./nav";
import Footer from "./Footer";
import axios from "axios";

const SignIn = () => {
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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

      if (access_token) {
        localStorage.setItem("token", access_token);
        console.log("Token stored:", access_token);
        navigate("/");
        navigate("/apply");
      } else {
        console.error("No token received from server.");
        alert("Failed to login. Please try again.");
      }
    } catch (error) {
      alert("Failed to Login. Please check your credentials.");
      console.error("Login error:", error);
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
        <div className="border-t-2 border-b-2 border-red-500  w-full max-w-[90%] sm:max-w-[35%] md:max-w-[40%] lg:max-w-[40%] shadow-xl rounded-lg bg-white">
          <div className="p-4 text-center ">
            <div className="flex justify-start items-center ml-1">
              <img src={star} alt="star" width={28} height={24} className="mr-2" />
              <p className="font-Poppins font-bold text-xl sm:text-2xl text-red-500 ">
                SIGN IN
              </p>
            </div>
          </div>

    
          <div className="p-6">
          
            <div className="mb-4">
              <label className="flex justify-start font-Poppins font-medium text-sm sm:text-md text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handlechange}
                className="border border-gray-200 shadow p-2 focus:outline-none focus:ring-1 text-black font-semibold text-[2vh] font-Poppins w-full rounded mt-2"
                placeholder="Enter your email"
              />
            </div>

          
            <div className="mb-4">
              <label className="flex justify-start font-Poppins font-medium text-sm sm:text-md text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handlechange}
                className="border border-gray-200 shadow p-2 focus:outline-none focus:ring-1 text-black font-semibold text-[2vh] font-Poppins w-full rounded mt-2"
                placeholder="Enter your password"
              />
            </div>

      
            <div className="text-right mb-6">
              <button className="font-Poppins font-medium text-sm sm:text-md hover:text-red-500 text-gray-600">
                Forgot Password?
              </button>
            </div>

    
            <button
              type="submit"
              className="font-medium hover:bg-gray-200 border hover:border-red-500 bg-red-500 p-2 hover:text-red-500 focus:outline-none focus:ring-1 text-white w-full rounded"
            >
              LOGIN
            </button>

            
            <div className="flex justify-center mt-4">
              <label className="font-Poppins font-regular text-sm sm:text-base text-gray-800">
                Don't have an account?
                <Link
                  to="/register"
                  className="ml-1 font-medium hover:text-red-500"
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