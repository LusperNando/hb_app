import React, { useEffect, useState } from "react";
import post from './images/posture.gif';
import Navigation from "./nav";
import axios from "axios";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import star from "./images/Star 1.svg";

const Internship = () => {
  const navigate = useNavigate();
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
         <div className="flex justify-center md:ml-0  sm:ml-[37vh]">
                <div className="flex flex-row md:mt-8 mt-4 mb-4 md:mb-0 ">
                  <img src={star} alt="star" width={30} height={24} className="absolute mt-2" />
                  <p className="font-Poppins text-[3.5vh] font-bold ms-8 text-red-500">Our Internships</p>
                </div>
          </div>

        
        <div className="flex flex-col sm:flex-row items-center justify-center md:mt-4 sm:mt-[30vh] px-4 sm:px-0">
          <section className="font-Poppins text-center sm:text-left sm:ml-[20vh]">
            <label className="font-medium text-3xl sm:text-[4vh]">
              Join Our Prestigious Team
            </label>
            <p className="text-xl font-medium text-gray-800 sm:text-[2.7vh] mt-6 mb-8">
              We are a team of innovators, achievers, and turn ideas into reality.
            </p>
            <button className="border shadow-xl text-lg sm:text-[2.5vh] bg-red-600 p-2 w-[30vh] md:w-[60vh] text-white rounded mt-12 hover:bg-white hover:text-red-600 font-bold focus:outline-none focus:ring-2 focus:ring-red-600">
              Click The Internship Program You Like, To Apply !!!
            </button>
          </section>
          <img
            src={post}
            alt="posture"
            className="mt-8 sm:mt-0 sm:ml-[35vh] w-[45vh] md:mr-[12vh] border rounded-full border-dashed border-red-600"
          />
        </div>

    
        <div className="relative mx-auto border-t-4 border-red-500 w-[30vh] mt-20 rounded-full animate-ping"></div>

        
        <div className="flex justify-center mt-4 font-Poppins">
          <label className="text-2xl sm:text-[3vh] font-medium text-gray-800">
            Current Internship Program
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
                      className="object-cover rounded-lg h-[30vh] w-full"
                      onError={(e) => {
                        e.target.alt = "Image not found";
                      }}
                    />
                    <div className="border-b-2 pl-1 shadow-xl rounded border-red-600 hover:border-blue-600">
                      <h2 className="mt-1 text-xl font-bold">{intern.title}</h2>
                      <p className="text-gray-600 font-Poppins font-medium">
                        {intern.description}
                      </p>
                      <p className="text-gray-600 font-medium font-Poppins">
                        {new Date(intern.date).toDateString()}
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