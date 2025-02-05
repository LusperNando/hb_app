import React, { useEffect, useState } from "react";
import post from './images/posture.gif';
import Navigation from "./nav";
import axios from "axios";
import Footer from './footer';
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight, FaSmile, FaStar } from "react-icons/fa";

const Internship = () => {
  const [internship, setInternship] = useState([]);
  const BASE_URL = "http://localhost:3000";

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/Internship`);
        setInternship(response.data);
      } catch (error) {
        console.error("Error fetching internships:", error);
      }
    };

    fetchInternships();
  }, []);

  return (
    <main>
      <div>
  
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-12">
          <p className="font-Poppins text-sm sm:text-lg font-medium text-gray-600 md:ml-[14vh]">
            Business Reg No: BRN-R7TAWMK
          </p>
          <p className="font-Poppins text-sm sm:text-lg font-medium text-gray-600 mt-2 sm:mt-0 md:mr-[8vh]">
            Email ID: hbspacelt@gmail.com
          </p>
        </div>

      
        <Navigation />
         <div className="flex justify-start md:ml-[20vh]  sm:ml-[37vh]">
                <div className="flex flex-row md:mt-8 mt-6 mb-4 md:mb-0 ">
                  <FaStar className="text-2xl shadow-lg text-[#1E024D] mt-3 md:mt-2.5 md:inline hidden" />
                  <p className="font-Poppins text-[2.5vh] font-bold ms-1 text-[#330386] ml-[5vh] md:ml-0 mb-4">OUR INTERNSHIPS</p>
                </div>
          </div>
      
        
        <div className="flex flex-col sm:flex-row items-center justify-center md:mt-4 sm:mt-[30vh] px-4 sm:px-0">
          <section className="font-Poppins text-center sm:text-left sm:ml-[20vh]">
            <label className="font-medium text-gray-800 font-Poppins text-3xl sm:text-[4vh]">
              Join Our Prestigious Team
            </label>
            <div className="flex flex-row">
            <FaSmile className="text-2xl mt-[3.5vh] shadow-lg text-[#1E024D] ml-6 md:ml-0 md:inline hidden"/>
            <p className="text-xl text-gray-800 font-medium sm:text-[2.7vh] mt-6 mb-8 md:mr-12 md:ms-1 md:mr-none">
              We are a team of innovators, achievers, and turn ideas into reality.
            </p>
            </div>
            <button className="border bg-gradient-to-r from-[#330386] to-purple-900 border-t-4 border-b-2 border-[#1E024D] shadow-2xl text-lg sm:text-[2.5vh] p-2 w-[30vh] md:w-[60vh] text-white rounded-lg mt-12 font-bold focus:outline-none">
              Click The Internship Program You Like, To Apply !!!
            </button>
          </section>
          <img
            src={post}
            alt="posture"
            className="mt-8 sm:mt-0 sm:ml-[35vh] w-[45vh] md:mr-[12vh] border-4 rounded-full border-dashed border-[#330386]"
          />
        </div>

    
        <div className="relative mx-auto border-t-4 border-[#1E024D] w-[30vh] mt-20 rounded-full animate-ping"></div>

        
        <div className="flex justify-center mt-4 font-Poppins">
          <label className="text-2xl sm:text-[3vh] font-medium text-[#1E024D]">
            Current Internship Programs
          </label>
        </div>

      
        <div className="px-4 sm:px-0 md:ml-[4vh]">
          <div className="mt-8 sm:mt-[8vh] mb-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-[8vh]">
              {internship.map((intern) => (
                <Link to="/apply" key={intern.id}>
                  <div className="font-Poppins font-medium text-[2.2vh] text-gray-800">
                    <img
                      src={`${BASE_URL}/${intern.imageurl}`}
                      alt={intern.title}
                      className="object-cover rounded-lg  border-b-4  border-t-4 border-[#1E024D] h-[30vh] w-full"
                      onError={(e) => {
                        e.target.alt = "Image not found";
                      }}
                    />
                    <div className="border-b-2 pl-1 border-[#1E024D] border-dashed hover:border-blue-700 rounded ">
                      <h2 className="mt-1 text-[#330386] text-xl font-extrabold">{intern.title}</h2>
                      <div className="flex flex-row">
                      <FaArrowAltCircleRight className="mt-[0.6vh] text-[#1E024D]"/>
                      <p className="text-gray-800 font-Poppins ms-1 font-medium">
                        {intern.description}
                      </p>
                      </div>
                      <p className="text-gray-800 text-sm italic font-regular font-Poppins pb-1">
                        Date: {new Date(intern.date).toDateString()}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

      
        <Footer />
      </div>
    </main>
  );
};

export default Internship;