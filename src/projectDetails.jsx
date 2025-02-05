import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./nav";
import { FaArrowAltCircleRight, FaHandPointDown, FaHandPointRight, FaStar } from "react-icons/fa";
import Footer from "./Footer.jsx";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false); 

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/project/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProject();
  }, [id]);


  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

 
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsFullScreen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handlePurchase = () => {
    alert(`Purchasing project: ${project.title}`);
    navigate("/");
  };

  if (!project) {
    return <div>Loading...</div>;
  }

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
      <div>
        <Navigation />
      </div>
      <div className="md:ml-[12vh] sm:ml-[10vh] mr-4 md:mr-14">
          <div className="flex flex-row mt-10 md:ml-[7.8vh] ml-4">
              <FaStar className="text-2xl shadow-lg text-[#1E024D] mt-3 md:mt-2" />
               <p className="font-Poppins text-[3.5vh] font-bold text-[#330386]">Buying Section</p>
            </div>
         <div className="flex flex-row mt-4 md:ml-[8vh] ml-5">
          <FaArrowAltCircleRight className="mt-1 text-xl text-[#1E024D]"/>
            <h2 className="text-gray-800 ms-1 mt-[0.1vh] text-lg font-Poppins font-medium">HINT: We send our products where ever you are, whatever choice you make. You will be reached. </h2>
         </div>
        <div className="mt-[8vh] ml-4 sm:ml-[8vh]">
          <div className="flex flex-col sm:flex-row gap-8">
            
            <div
              className={`group relative w-full md:w-[30%] h-[300px] md:h-[450px] overflow-hidden group ${
                isFullScreen ? "absolute inset-0 z-50 bg-black bg-opacity-90 md:w-screen md:mt-[6vh] scale-95 md:h-screen" : ""
              }`}
              onClick={toggleFullScreen}
            >
              <img
                src={`http://localhost:3000/${project.imageurl}`}
                alt={project.title}
                className={`w-full h-full object-cover rounded-lg group-hover:opacity-100 transition-opacity transition-transform duration-300  border-t-2 border-b-2 border-[#1E024D] ${
                  isFullScreen ? "w-screen h-screen object-contain" : ""
                }`}
              />
              {isFullScreen && (
                <button
                  className="fixed top-4 right-4 text-4xl border-t-2 border-b-2 bg-red-600 z-50 text-white rounded w-10 "
                  onClick={toggleFullScreen}
                >
                  &times;
                </button>
              )}
            </div>
  <div className="flex flex-col shrink-0 sm:ml-4 mt-4 sm:mt-0 md:inline hidden">
   <div className="flex flex-row items-center">
    <FaHandPointRight className="text-[#1E024D] w-8 h-8 mr-2" />
    <h2 className="text-white bg-gradient-to-r from-[#330386] to-purple-900 font-Poppins font-bold shadow-2xl mb-2 md:text-[3vh] rounded-lg w-[33vh] border-t-4 border-b-2 p-2 border-[#1E024D]">
      Project Description
    </h2>
   </div>
  <div className="w-full sm:w-[70vh] font-Poppins font-semibold">
    <p className="text-gray-800 text-lg md:ml-[5vh] break-words ml-10 md:mr-none">
      {project.description}
    </p>
  </div>
  </div>
  </div>
  </div>
        <div className="md:ml-[8vh] md:mt-[3vh] ml-4">
          <h2 className="mt-2 text-2xl text-[#1E024D] font-bold ">{project.title}</h2>
          <p className="text-[#330386] text-xl font-black">MKW {project.price}</p>
        </div>

  <div className="flex flex-col ml-4 shrink-0 sm:ml-4 md:mt-4 mt-6 sm:mt-0 md:hidden">
   <div className="flex flex-row items-center">
    <FaHandPointRight className="text-blue-500 w-8 h-8 mr-2 hidden" />
    <h2 className="text-white bg-gradient-to-r from-[#330386] to-purple-900 font-Poppins font-bold shadow-2xl mb-2 md:text-[3vh] rounded-lg w-[33vh] border-t-4 border-b-2 p-2 border-[#1E024D]">
      Project Description
    </h2>
   </div>
  <div className="bg-gradient-to-r from-blue-100 to-purple-100 shadow p-2 w-full h-auto text-dray-800 rounded-lg border-b-4 border-[#1E024D] sm:w-[70vh] font-Poppins font-semibold">
    <p className="text-gray-800 text-lg md:ml-[5vh] break-words mr-[7vh]">
      {project.description}
    </p>
  </div>
  </div>
        <div className="flex flex-row ml-[-2vh] mt-2 md:mt-0 md:ml-0">
        <div className="ml-[-4.3vh] md:ml-0">
        <button
          onClick={() => navigate(-1)}
          className="border w-[16vh] shadow-lg bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-full mt-4 ml-[8vh] font-Poppins font-bold shadow-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
        >
          Back
        </button>
        </div>
        <div className="ml-4 md:ml-0">
        <button
          onClick={handlePurchase}
          className="border bg-gradient-to-r from-[#330386] to-purple-900 hover:from-purple-900 hover:to-[#330386] w-[16vh] ml-[8vh] mt-4 p-2 rounded-full text-white font-Poppins font-bold shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-700"
        >
          Buy Now
        </button>
        </div>
        </div>
      </div>

   
      <div className="mt-[6vh]">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetails;