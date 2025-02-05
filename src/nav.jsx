import React, { useState } from "react";
import logo from './images/HBspace.jpg';
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { FiMenu } from 'react-icons/fi';
import Logout from "./Logout";
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";

const Navigation = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpen, setisOpen] = useState(false)
    const { user } = useAuth();
        
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
    
        };
       const toggleDropdown = () =>{
         setisOpen(!isOpen)
       };
    return(
     <nav>
          <div className="mt-2 bg-gradient-to-r from-[#1E024D] to-[#1E024D] relative justify-center bg-cover rounded-lg  md:pt-[2vh] md:ml-[-5vh] font-Poppins h-[14.5vh] mt-2"> 
           <header className="flex justify-between items-center w-full px-4">
               <img
                 src={logo}
                 alt="Logo"
                 className="w-12 md:w-16 rounded-lg mt-2 md:ml-[17vh] md:mr-[20vh]"
               />
               <div
                 className={`${
                   isMenuOpen ? "flex" : "hidden"
                 } md:flex md:mr-[40vh] md:mt-2 flex-col md:flex-row md:bg-none bg-gradient-to-r from-[#1E024D] to-[#1E024D] md:bg-transparent w-full md:w-auto h-[70vh] md:h-auto absolute md:relative mt-[78vh] md:mt-0 z-50 items-center pt-2 pb-4 left-0 gap-6 md:gap-8 rounded-lg md:shadow-none shadow`}
               >
                 <Link to="/" className="font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg ">
                   Home
                 </Link>
                 <a href="#about" className=" font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg">
                   About
                 </a>
                 <a href="#services" className=" font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg">
                   Services
                 </a>

                 <Link to="/up-events" onClick={toggleDropdown} className="font-Poppins text-white font-black hover:text-purple-900  transition-colors duration-300 font-semibold md:text-lg text-sm md:hidden">Events</Link>
                 
                 <button onClick={toggleDropdown} className="font-Poppins text-white font-black hover:text-purple-900  transition-colors duration-300 font-semibold md:text-lg text-sm md:inline hidden">Events</button>
                 
        <div className="flex items-center ml-[26vh] absolute inline-block text-left mt-12">
      {isOpen && (
        
        <div className="flex flex-col md:mt-[5vh] mt-[27vh] absolute mx-[-7vh] md:mx-[0.5vh]">
        <FaArrowAltCircleDown className="md:ml-[10vh] text-[#330386] mt-1 md:inline hidden "/>
        <div className="md:w-[21vh] md:ml-2 ml-[-2.5vh] ">
          <div className="flex flex-row">
        <FaArrowAltCircleRight className="mt-4 text-blue-300 hidden"/>
          <ul>
            <li
              className="px-4 mb-3 md:mb-none ms-1 md:ms-none border-b-2 bg-gradient-to-r from-[#330386] to-purple-900 border-t-4  border-[#330386] hover:from-[#330386] hover:to-purple-900 rounded-lg py-2 text-white font-Poppins font-medium md:inline hidden"
            >
             <Link to="/up-events">Upcoming <label className="md:inline hidden">Events</label></Link>
            </li>
          </ul>
        </div>
        </div>
      </div>

      )}
    </div>
                 <a href="#donate" className="font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg">
                   Donate
                 </a>
                 <Link to="/project" className="font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg">
                   Projects
                 </Link>
                 <Link to="/intern" className="font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg">
                   Internships
                 </Link>
                 {user?.role === "Admin" && (
                   <Link to="/admin" className="font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg">
                     Admin
                   </Link>
                 )}
                 <a href="#jobs" className="font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg">
                   Products
                 </a>
                  <Link
                     to="/signin"
                      className="font-Poppins font-medium bg-[#330386] text-white px-4 py-2 rounded-full hover:bg-[#31106B] text-sm md:text-lg md:ml-[8vh]"
                      >
                      Register/Login
                    </Link>
                <div className="text-white border p-0.5 bg-[#330386] rounded-lg hover:bg-[#31106B] border-blue-600 ">
               <Logout/>
               </div>
               </div>
               <button
                 className="md:hidden text-white border-t-2 border-b-2 px-3 py-1 rounded mt-4"
                 onClick={toggleMenu}
               >
                 <FiMenu />
               </button>
              
             </header>     
      </div>
     </nav>
     
    );
};
export default Navigation;