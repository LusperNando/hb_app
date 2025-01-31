import React, { useState } from "react";
import logo from './images/HBspace.jpg';
import { Link } from "react-router-dom";
import triangle from './images/Polygon 3.svg'
import { useAuth } from "./AuthContext";
import { FiMenu } from 'react-icons/fi';
import Logout from "./Logout";
import { FaHandPointRight } from "react-icons/fa";

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
          <div className="mt-2 bg-[url('./images/tesla.jpg')] relative justify-center items-center bg-no-repeat bg-[length:100%] bg-cover bg-center md:pt-[2vh] md:ml-[-5vh] font-Poppins h-[14.5vh] mt-2"> 
           <header className="flex justify-between items-center w-full px-4">
               <img
                 src={logo}
                 alt="Logo"
                 className="w-12 md:w-16 rounded-lg mt-4 md:ml-[17vh] md:mr-[20vh]"
               />
               <div
                 className={`${
                   isMenuOpen ? "flex" : "hidden"
                 } md:flex md:mr-[40vh] md:mt-2 flex-col md:flex-row bg-gray-900 md:bg-transparent w-full md:w-auto h-[61vh] md:h-auto absolute md:relative mt-[66.9vh] md:mt-0 z-50 items-center pt-2 pb-4 left-0 gap-6 md:gap-8 rounded-lg md:shadow-none shadow`}
               >
                 <Link to="/" className="font-Poppins font-medium text-white hover:text-red-700 text-sm md:text-lg ">
                   Home
                 </Link>
                 <a href="#about" className="font-Poppins font-medium text-white hover:text-red-700 text-sm md:text-lg">
                   About
                 </a>
                 <a href="#services" className="font-Poppins font-medium text-white hover:text-red-700 text-sm md:text-lg">
                   Services
                 </a>
                 <div className="flex flex-row">
                 <FaHandPointRight className="absolute ml-[6.5vh] mt-1 text-red-500 md:hidden"/>
                 <button onClick={toggleDropdown} className="font-Poppins text-white font-black hover:text-red-700 hover:text-red-600 transition-colors duration-300 font-semibold text-[2vh]">Events</button>
                 </div>
        <div className="flex items-center mt-[vh] ml-[26vh] absolute inline-block text-left mt-12">
      {isOpen && (
        
        <div className="flex flex-col md:mt-[5vh] mt-[23vh] absolute mx-[-7vh] md:mx-[0.5vh]">
        <img src={triangle} width={24} height={100} className="ml-[9vh] md:inline hidden"/>
        <div className=" md:w-[21vh] bg-white border border-gray-300 rounded shadow-lg">
          <ul>
            <li
              className="px-4 py-2 hover:text-red-600 text-gray-800 font-Poppins font-medium "
            >
             <Link to="/up-events">Upcoming <label className="md:inline hidden">Events</label></Link>
            </li>
          </ul>
        </div>
        </div>
      )}
    </div>
                 <a href="#donate" className="font-Poppins font-medium text-white hover:text-red-700 text-sm md:text-lg">
                   Donate
                 </a>
                 <Link to="/project" className="font-Poppins font-medium text-white hover:text-red-700 text-sm md:text-lg">
                   Projects
                 </Link>
                 <Link to="/intern" className="font-Poppins font-medium text-white hover:text-red-700 text-sm md:text-lg">
                   Internships
                 </Link>
                 {user?.role === "Admin" && (
                   <Link to="/admin" className="font-Poppins font-medium text-white hover:text-red-700 text-sm md:text-lg">
                     Admin
                   </Link>
                 )}
                 <a href="#jobs" className="font-Poppins font-medium text-white hover:text-red-700 text-sm md:text-lg">
                   Jobs
                 </a>
                 <Link
                   to="/signin"
                   className="font-Poppins font-medium bg-red-600 text-white px-2 py-1 rounded hover:bg-white hover:text-red-600 text-sm md:text-lg md:ml-[8vh]"
                 >
                   Register/Login
                 </Link>
                <div className="text-white border p-0.5 bg-red-600 rounded-lg hover:text-red-600 hover:bg-white border-red-500 ">
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