import React, { useState } from 'react';
import logo from './images/HBspace.jpg';
import { Link } from 'react-router-dom';
import star from './images/Star 1.svg';
import YouTubeEmbed from './youtubeEmbed';
import ScrollingText from './scrollText';
import Footer from './Footer';
import Feedback from './feedback';
import line from './images/line.svg';
import { useAuth } from './AuthContext';
import { FiMenu } from 'react-icons/fi';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="w-full overflow-x-hidden">
      <div className="flex justify-center mt-3">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0">
          <p className="font-Poppins text-sm md:text-lg font-medium text-gray-600">
            Business Reg No: BRN-R7TAWMK
          </p>
          <p className="font-Poppins text-sm md:text-lg font-medium text-gray-600 md:ml-[70vh]">
            Email ID: hbspacelt@gmail.com
          </p>
        </div>
      </div>

      <div
        className="bg-[url('./images/cube1.jpg')] bg-no-repeat bg-cover bg-center h-[45vh] md:h-[80vh] mt-2"
      >
        <header className="flex justify-between items-center w-full px-4 md:px-16">
          <img
            src={logo}
            alt="Logo"
            className="w-12 md:w-16 rounded-lg mt-4 md:mt-8 md:ml-[22vh] md:mr-[20vh]"
          />
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex md:mr-[40vh] md:mt-8 flex-col md:flex-row bg-gray-900 md:bg-transparent w-full md:w-auto h-[60vh] md:h-auto absolute md:relative mt-[66.9vh] md:mt-0 z-50 items-center pt-8 pb-4 left-0 gap-6 md:gap-8 rounded-lg md:shadow-none shadow`}
          >
            <a href="#about" className="font-Poppins font-medium text-white hover:text-red-700 text-sm md:text-lg">
              About
            </a>
            <a href="#services" className="font-Poppins font-medium text-white hover:text-red-700 text-sm md:text-lg">
              Services
            </a>
            <Link to="/events" className="font-Poppins font-medium text-white hover:text-red-700 text-sm md:text-lg">
              Events
            </Link>
            <a href="#donate" className="font-Poppins font-medium text-white hover:text-red-700 text-sm md:text-lg">
              Donate
            </a>
            <a href="#projects" className="font-Poppins font-medium text-white hover:text-red-700 text-sm md:text-lg">
              Projects
            </a>
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
          </div>
          <button
            className="md:hidden text-white border-t-2 border-b-2 px-3 py-1 rounded mt-4"
            onClick={toggleMenu}
          >
            <FiMenu />
          </button>
        </header>

        <div className="flex justify-center mt-12">
          <div>
            <h1 className="font-Poppins font-black text-white text-3xl md:text-6xl ml-[6vh] md:ml-[7.5vh] mt-6 md:mt-[14vh]">
              Easy Place To
            </h1>
            <h2 className="font-Poppins text-3xl md:text-5xl font-black text-red-500 shadow-xl mt-1 md:mt-2">
              Connect & Innovate
            </h2>
            <div className="flex justify-center mt-6">
              <Link
                to="/register"
                className="bg-transparent border border-white text-white px-6 py-1.5 rounded hover:bg-red-500 hover:text-white text-sm md:text-lg mt-2 font-Poppins font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

  
      <div className="md:ml-[6vh] ml-[2vh]">
        <section className="md:px-[21vh] md:mt-12 mt-6">
          <div className="flex items-center gap-1">
            <img src={star} alt="star" className="w-6 h-6" />
            <h2 className="text-xl md:text-3xl font-regular text-gray-600">
              About <label className="font-Poppins font-bold text-red-500 text-lg md:text-[3vh]">HB SPACE TL</label>
            </h2>
          </div>
          <p className="text-sm md:text-lg mt-4 text-gray-600 leading-relaxed">
            HB Space is a registered startup founded in 2022 and headquartered in Zomba.
            Our mission is to empower the nation through cutting-edge technologies...
          </p>
          <button className="bg-red-600 text-white px-2 py-1.5 mt-4 rounded hover:bg-gray-200 hover:text-red-500">
            Read More
          </button>
        </section>

      
        <div className="md:flex md:justify-start md:flex-row flex-col">
          <div className="flex md:flex-row flex-col items-center md:w-[60vh] md:ml-[24vh] md:h-[40vh] md:mt-[12.5vh] mt-[4vh] md:mr-0 mr-[2vh] transition scale-110 md:transition-none md:scale">
            <YouTubeEmbed />
          </div>
          <div>
          <div className="relative flex flex-row justify-center items-center flex-wrap gap-x-1 mt-14 md:mt-[14vh] mx-[4vh] md:mr-[20vh]">
         <img src={star} alt="star" className="w-[40px] h-[24px] md:relative absolute md:mr-0 mr-[38vh] md:mb-0 mb-7 " />
         <p className="font-Poppins font-regular text-[3vh] md:font-extralight md:mb-0 mb-8">
          Latest News <a className='md:hidden'>& Adverts of</a>
         </p>
         <p className="font-Poppins text-[3vh] md:font-extralight md:inline hidden">
          announcements & Adverts of
         </p>
          <p className="font-Poppins text-[#F40404] font-bold md:font-medium text-[3vh] md:relative absolute md:mt-0 mt-8 md:mr-0 mr-4">
           HB SPACE TL
          </p>
          </div>

            <div className="flex justify-center md:mt-4 md:ml-[2vh] md:mr-[16vh] mr-[2vh]">
              <img src={line} alt="line" width={580} />
            </div>
            <div className="flex justify-center mr-[40vh]">
              <ScrollingText />
            </div>
          </div>
        </div>
      </div>

    
      <div className="ml-[6vh] md:ml-[23vh] md:bg-[url('./images/water.jpg')] bg-[length:50%] h-[40vh] md:mr-[20vh] md:mt-20 transform scale-95">
        <div className="flex flex-row md:mb-2 items-center md:mt-12 mt-[39vh] md:ml-[4vh] mx-[-6vh]">
          <img src={star} alt="star" width={30} height={24} className="md:mt-6 mt-4 md:mb-0 mb-4" />
          <h1 className="md:text-red-600 text-red-500 md:font-bold font-bold text-[3vh] ms-1 mt-6 md:mb-0 mb-6">
            HB Space Outline
          </h1>
        </div>
        <div className="md:h-[40vh] flex justify-center bg-[url('./images/water.jpg')] w-auto bg-[length:50%] md:bg-none md:border-none md:mr-0 md:w-full shadow-xl h-[95vh] md:mx-auto border-t-4 border-b-4 border-red-600 mx-[-7vh]">
          <div className="flex justify-center text-center p-5 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center md:mt-0 mt-6">
              <div className="block md:mb-20 md:mr-[3vh] w-[45vh] h-[28vh] bg-gray-200 p-5 bg-gray-800 rounded-lg shadow-lg text-center font-Poppins mr-[6vh]">
                <h2 className="text-2xl text-blue-500 font-bold mb-2 font-Poppins">Access</h2>
                <p className="md:text-gray-100 text-white md:text-[2.2vh] text-sm font-Poppins md:hover:text-white font-medium mb-4 md:mb-0">
                  24/7 access to our training ground equipment and interaction with specialists. Book special meetings and services you want HB Space to do for you.
                </p>
              </div>
              <div className="block md:mb-20 md:mr-[3vh] mt-6 md:mt-0 w-[45vh] h-[28vh] p-5 bg-gray-800 rounded-lg shadow-lg text-center font-Poppins mr-[6vh]">
                <h2 className="text-2xl text-blue-500 font-bold mb-2 font-Poppins">Gain</h2>
                <p className="md:text-gray-100 text-white md:hover:text-white font-Poppins font-medium text-sm md:text-[2.2vh] mb-2 md:mb-0">
                  Master essential skills, gain hands-on experience, and tackle real-world challenges with confidence. At HB Space TL, you'll grow into endless possibilities for your future!
                </p>
              </div>
              <div className="block md:mb-20 w-[45vh] mb-6 md:mb-0 mt-6 md:mt-0 h-[30vh] md:h-[28vh] md:mr-[3vh] md:bg-gray-800 p-5 bg-gray-800 rounded-lg shadow-lg text-center font-Poppins mr-[6vh]">
                <h2 className="text-2xl text-blue-500 font-bold font-Poppins md:mb-2">Goal</h2>
                <p className="md:text-gray-200 text-white md:text-[2.2vh] font-Poppins md:hover:text-white font-medium text-sm mb-2 md:mb-0">
                  is to be a leading force in the integration of advanced technology. We strive to deliver innovative solutions that enhance security, efficiency, and growth across diverse sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

  
      <div className="flex flex-col md:mt-12 ml-[20vh] mt-[58vh]">
        <div className="flex flex-row items-center mt-[5vh] md:ml-[6vh] ml-[-18vh] space-x-1 mt-4">
          <img src={star} alt="star" width={30} height={24} />
          <p className="font-Poppins text-[3vh] font-bold text-red-500">Feedback</p>
        </div>
        <div className="md:flex md:justify-center flex justify-end md:transition-none md:scale-100 transition scale-90">
          <Feedback />
        </div>
      </div>

  
      <div className="flex justify-center mt-20">
        <Footer />
      </div>
    </main>
  );
};

export default Homepage;