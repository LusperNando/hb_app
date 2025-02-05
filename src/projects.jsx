import React, { useEffect, useState } from "react";
import Navigation from "./nav";
import axios from "axios";
import Footer from './Footer';
import { FaHandPointDown, FaHandPointRight, FaStar } from "react-icons/fa";
import proj from "./images/project.gif";
import {  useNavigate } from "react-router-dom";

const Projects = () => {
  const [project, setProject] = useState([]);
  const BASE_URL = "http://localhost:3000";
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/project`);
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProject();
  }, []);

  const handleProject = (id) => {
    navigate(`/project/${id}`); 
  };

  return (
    <div>
      <div className="flex justify-center mt-3"></div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-12">
        <p className="font-Poppins text-sm sm:text-lg font-medium text-gray-600 md:ml-[14vh]">
          Business Reg No: BRN-R7TAWMK
        </p>
        <p className="font-Poppins text-sm sm:text-lg font-medium text-gray-600 mt-2 sm:mt-0 md:mr-[12vh]">
          Email ID: hbspacelt@gmail.com
        </p>
      </div>
      <Navigation />

      <div className="flex justify-start md:ml-[18vh] sm:ml-[37vh]">
        <div className="flex flex-row mt-4 md:mt-7 mb-4 md:mb-0">
          <FaStar className="relative text-2xl shadow-lg text-[#1E024D] mt-3 md:mt-2" />
          <p className="font-Poppins text-[3.5vh] font-bold text-[#330386]">Our Projects</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center md:mt-8 sm:mt-[30vh] md:px-4 px-1 sm:px-0 md:ml-[6vh]">
        <div className="font-Poppins text-center sm:text-left ml-[2vh] md:ml-[2vh]">
          <div className="flex flex-col font-Poppins font-medium">
            <div className="flex flex-row">
              <FaHandPointRight className="w-9 h-8 md:w-8 md:h-8 mr-1 text-[#1E024D]" />
              <p className="text-xl text-gray-800 sm:text-[2.7vh] mb-8 mr-12 md:mr-0">
                These project are made based on customers base.
              </p>
            </div>
            <div className="flex flex-row">
              <FaHandPointRight className="md:w-8 md:h-8 w-10 h-12 md:mr-1 ml-[-1vh] md:ml-0 mt-[-1vh] md:mt-0 text-[#1E024D]" />
              <p className="text-xl mr-[7vh] md:mr-0 text-gray-800 sm:text-[2.7vh] mb-8">
                Our products are innovative driven,try them out!!.
              </p>
            </div>
            <div className="flex flex-row">
              <FaHandPointRight className="md:w-8 mr-1 md:ml-0 ml-[-2vh] md:h-8 w-6 h-8 md:mr-2 text-[#1E024D]" />
              <p className="text-xl text-gray-800 sm:text-[2.7vh] md:ml-0">
                Which project Do You recommend?
              </p>
            </div>
          </div>
          <button className="border-t-4 border-t-2 border-[#1E024D] text-white shadow-lg text- sm:text-[2.5vh] p-2 w-[30vh] md:w-[60vh] text-gray-800 bg-gradient-to-r from-[#330386] to-purple-900 rounded-lg mt-12 hover:bg-white font-bold ml-[-2vh] md:ml-2">
            Click On View To Check & Buy The Product You Like!!!
          </button>
        </div>
        <img
          src={proj}
          alt="projects"
          className="mt-8 sm:mt-0 md:ml-[45vh] w-[45vh] md:mr-[12vh] border-4 rounded-full border-dashed border-[#1E024D]"
        />
      </div>

      <div className="flex justify-center mt-12">
        <FaHandPointDown className="text-[#1E024D] w-12 h-12 animate-ping" />
      </div>

      <div className="md:ml-4 sm:ml-[10vh] mr-4 md:mr-14">
        <div className="mt-[12vh] ml-4 sm:ml-[8vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-[8vh]">
            {project.map((project) => (
              <div
                className="font-Poppins font-medium text-[2.2vh] text-gray-800"
                key={project.id}
              >
                <img
                  src={`${BASE_URL}/${project.imageurl}`}
                  alt={project.title}
                  className="object-cover rounded-lg h-[35vh] w-full border-t-4 border-b-4 border-[#1E024D] rounded-lg mb-0.5"
                  onError={(e) => {
                    e.target.alt = "Image not found";
                  }}
                />
                <h2 className="mt-2 text-2xl text-gray-800 font-Poppins font-bold ">{project.title}</h2>
                <button
                  type="submit"
                  id="submit"
                  className="border bg-gradient-to-r from-[#330386] to-purple-900 hover:from-purple-900 hover:to-[#330386] w-[14vh] pl-6 pr-6 p-2 rounded-full text-white font-Poppins font-bold shadow-xl focus:outline-none focus:ring-1 focus:ring-blue-700"
                  onClick={() => handleProject(project.id)} 
                >
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[16vh]">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;