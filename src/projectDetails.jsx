import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./nav";
import { FaHandPointRight } from "react-icons/fa";
import Footer from "./Footer";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

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
      <div >
      <Navigation />
      </div>
      <div className="md:ml-[12vh] sm:ml-[10vh] mr-4 md:mr-14">
        <div className="mt-[12vh] ml-4 sm:ml-[8vh]">
          <div className="flex flex-col sm:flex-row gap-8">
        
            <div className="w-full md:w-[50%] md:h-[60vh] md:overflow-visible  group ">
              <img
                src={`http://localhost:3000/${project.imageurl}`}
                alt={project.title}
                className="object-contain rounded-lg w-full h-auto transition-transform duration-300 group-hover:scale-105 overflow-hidden border-t-2 border-b-2 border-red-500" // Ensure the image is fully visible
              />
            </div>
            
            
            <div className="flex flex-col shrink-0 sm:ml-4 mt-4 sm:mt-0">
              <div className="flex flex-row items-center">
                <FaHandPointRight className="text-red-600 w-8 h-8 mr-2" />
                <h2 className="text-red-500 font-Poppins font-bold mb-2 md:text-[3vh] underline">
                  Project Description
                </h2>
              </div>
              <label className="text-gray-600 text-lg md:ml-[5vh]">{project.description}</label>
            </div>
          </div>
        </div>
      
        <div className="ml-[8vh] md:mt-[28vh]">
        <h2 className="mt-2 text-2xl font-bold ">{project.title}</h2>
        <p className="text-blue-800 text-xl font-black">MKW {project.price}</p>
        </div>
        <button
          onClick={() => navigate(-1)} 
          className="border shadow-lg bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg mt-4 ml-[8vh] font-Poppins font-bold shadow-xl focus:outline-none focus:ring-1 focus:ring-gray-600"
        >
          Back
        </button>
        
        <button
          onClick={handlePurchase}
          className="border bg-red-600 hover:bg-white hover:text-red-500 w-[16vh] ml-[8vh] mt-4 p-2 rounded-lg text-white font-Poppins font-bold shadow-xl focus:outline-none focus:ring-1 focus:ring-red-600 shadow-lg"
        >
          Buy Now
        </button>
      </div>
      <div className="mt-[8vh]">
      <Footer/>
      </div>
    </div>
  );
};

export default ProjectDetails;