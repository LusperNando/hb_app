import React, { useState } from 'react';
import logo from './images/HBspace.jpg';
import { Link } from 'react-router-dom';
import YouTubeEmbed from './youtubeEmbed';
import ScrollingText from './scrollText';
import Footer from './footer.jsx';
import Feedback from './feedback';
import { useAuth } from './AuthContext';
import { FiMenu, FiMinus } from 'react-icons/fi';
import { FaGripLines, FaLine, FaStar, FaStream } from 'react-icons/fa';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="w-full overflow-x-hidden bg-gray-50">

      <div className="flex justify-center mt-3">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-x-[80vh] md:space-y-0">
          <p className="font-Poppins text-sm md:text-lg font-medium text-gray-600 ">
            Business Reg No: BRN-R7TAWMK
          </p>
          <p className="font-Poppins text-sm md:text-lg font-medium text-gray-600 ">
            Email ID: hbspacelt@gmail.com
          </p>
        </div>
      </div>

    
      <div className="bg-gradient-to-r from-[#1E024D] to-[#1E024D] h-[45vh] md:h-[80vh] mt-2">
        <header className="flex justify-between items-center w-full px-4 md:px-8">
          <img
            src={logo}
            alt="Logo"
            className="w-20 md:w-24 rounded-lg mt-4 md:mt-10 md:ml-[22vh] md:mr-[15.5vh]"
          />
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex md:mr-[55vh] md:mt-8 flex-col md:flex-row bg-[#1E024D] md:bg-transparent w-full md:w-auto h-[60vh] md:h-auto absolute md:relative mt-[66.9vh] md:mt-0 z-50 items-center pt-8 pb-4 left-0 gap-6 md:gap-8 rounded-lg md:shadow-none shadow`}
          >
            <a href="#about" className="font-Poppins font-medium text-white hover:text-purple-900 text-sm md:text-lg ">
              About
            </a>
            <a href="#services" className="font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg">
              Services
            </a>
            <Link to="/events" className="font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg">
              Events
            </Link>
            <a href="#donate" className="font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg">
              Donate
            </a>
            <a href="#projects" className="font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg">
              Projects
            </a>
            <Link to="/intern" className="font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg">
              Internships
            </Link>
            {user?.role === "Admin" && (
              <Link to="/admin" className="font-Poppins font-medium text-white hover:text-purple-900  text-sm md:text-lg">
                Admin
              </Link>
            )}
            <a href="#jobs" className="font-Poppins font-medium text-white hover:text-purple-900 text-sm md:text-lg">
              Products
            </a>
            <Link
              to="/signin"
              className="font-Poppins font-medium bg-[#330386] text-white px-4 py-2 rounded-full hover:bg-[#31106B] text-sm md:text-lg md:ml-[8vh]"
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

        <div className="flex justify-center md:mt-4 mt-8 ml-2 md:ml-none">
          <div>
            <div className='flex flex-col'>
            <h1 className="font-Poppins font-black text-white text-2xl md:text-5xl ml-[9vh] md:ml-[12vh] mt-6 md:mt-[14vh]">
              HB SPACE{' '}
            </h1>
            <h2 className='font-Poppins md:ml-[25vh] ml-[15vh] text-xl font-black text-white border-t-2 w-[2.8vh] p-[0.2vh] mt-1 rounded border-b-2 border-blue-500 shadow-2xl'> TL</h2>
            </div>
            <h2 className="font-Poppins text-3xl md:text-5xl font-black text-white shadow-xl mt-1 md:mt-2">
              Connect & Innovate
            </h2>
            <div className="flex justify-center mt-6">
              <Link
                to="/register"
                className="bg-gradient-to-r from-[#330386] to-purple-900 text-white px-8 md:mr-12 mr-3 md:mt-2 py-2 rounded-full hover:from-purple-900 hover:to-[#330386] transition-all duration-300 font-Poppins font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="md:ml-[6vh] ml-[2vh]">
        <section className="mr-[2vh] md:px-[21vh] md:mr-0 md:mt-2 mt-6 bg-white p-8 rounded-lg shadow-lg md:mr-[7vh] border-b-2 border-[#330386] border-dashed ">
          <div className="flex items-center ">
            <FaStar className='text-[#1E024D] text-2xl shadow-lg'/>
            <h2 className="text-xl md:text-2xl font-medium text-gray-800">
              ABOUT <label className="font-Poppins font-bold text-[#330386] text-lg md:text-[3vh]">HB SPACE TL</label>
            </h2>
          </div>
          <p className="text-sm md:text-lg mt-4 text-gray-600 leading-relaxed">
            HB Space is a registered startup founded in 2022 and headquartered in Zomba.
            Our mission is to empower the nation through cutting-edge technologies...
          </p>
          <button className="bg-gradient-to-r from-[#330386] to-purple-900 text-white px-4 py-2 mt-4 rounded-full hover:from-purple-900 hover:to-[#330386] border focus:outline-none focus:ring-1 focus:ring-blue-700 transition-all duration-300">
            Read More
          </button>
        </section>      
        <div className="md:flex md:justify-start md:flex-row flex-col">
          <div className="flex md:flex-row flex-col items-center md:w-[60vh] md:ml-[24vh] md:h-[40vh] md:mt-[12.5vh] mt-[4vh] md:mr-0 mr-[2vh] transition scale-110 md:transition-none md:scale">
            <YouTubeEmbed />
          </div>
          <div>
            <div className="relative flex flex-row md:justify-center items-center border-b-2 border-[#330386] pb-3 rounded md:w-[81vh] flex-wrap gap-x-1 mt-14 md:mt-[11vh] md:mx-[9vh] mx-[6vh] md:mr-[16vh]">
              <FaStar className='text-2xl shadow-lg text-[#1E024D] mr-8 md:mr-0 ml-[-5vh] md:ml-[-3vh]'/>
              <div className=' md:ml-0 mr-[-8vh] md:mr-0 ml-[-4vh] md:flex-none flex flex-row'>
              <p className="font-Poppins font-regular ms-1 md:ms-0 text-[3vh] md:font-medium text-gray-800">
                Latest News  
              </p>
              <p className='md:hidden text-[3vh]'>`& Adverts of</p>
              </div>
              
              
              <p className="font-Poppins text-[3vh] md:font-medium text-gray-800 md:inline hidden">
                announcements & Adverts of
              </p>
              <p className="font-Poppins text-[#330386] font-bold md:font-bold text-[3vh] md:relative md:mt-0 md:mr-0 ml-10 md:ml-0">
                HB SPACE TL
              </p>
              
            </div>

            <div className="flex justify-center md:mt-4 md:ml-[2vh] md:mr-[16vh] mr-[2vh]">
            </div>
            <div className="flex justify-center md:mr-[39vh] md:mt-[-2vh]">
              <ScrollingText />
            </div>
          </div>
        </div>
      </div>

      
       <div className="ml-[6vh] md:ml-[23vh] h-[40vh] md:mr-[20vh] md:mt-20 transform scale-95">
  
  <div className="flex flex-row md:mb-2 items-center md:mt-12 mt-[39vh] md:ml-[1vh] mx-[-6vh]">
    <FaStar className='text-2xl md:mt-6 shadow-lg text-[#1E024D] md:ml-[-1vh]'/>
    <h1 className="md:text-[#330386] text-[#330386] md:font-bold font-bold text-[3vh] mt-6 md:mb-0 mb-6">
      HB Space Outline
    </h1>
  </div>
  <div className="md:h-[40vh] flex justify-center bg-gradient-to-r from-blue-50 to-purple-50 w-auto md:w-[160vh] shadow-lg h-[95vh] md:mx-auto border-t-2 border-b-2 border-[#330386] mx-[-7vh]">
    <div className="flex justify-center text-center p-5 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center md:mt-0 mt-6">
    
        <div className="block md:mb-20 md:mr-[3vh] w-[45vh] h-[28vh] bg-[#1E024D] p-5 rounded-lg shadow-lg text-center font-Poppins mr-[6vh] hover:shadow-2xl hover:border-b-2 border-dashed border-white rounded-lg transition-shadow duration-300">
          <h2 className="text-2xl text-blue-500 font-bold mb-2 font-Poppins">Access</h2>
          <p className="text-white text-sm md:text-[2.2vh] font-Poppins font-medium mb-4 md:mb-0">
            24/7 access to our training ground equipment and interaction with specialists. Book special meetings and services you want HB Space to do for you.
          </p>
        </div>

  
        <div className="block md:mb-20 md:mr-[3vh] mt-6 md:mt-0 w-[45vh] h-[28vh] bg-[#1E024D] p-5 rounded-lg shadow-lg text-center font-Poppins mr-[6vh] hover:shadow-2xl hover:border-b-2 border-dashed border-white rounded-lg transition-shadow duration-300">
          <h2 className="text-2xl text-blue-500 font-bold mb-2 font-Poppins">Gain</h2>
          <p className="text-white text-sm md:text-[2.2vh] font-Poppins font-medium mb-2 md:mb-0">
            Master essential skills, gain hands-on experience, and tackle real-world challenges with confidence. At HB Space TL, you'll grow into endless possibilities for your future!
          </p>
        </div>

  
        <div className="block md:mb-20 w-[45vh] mb-6 md:mb-0 mt-6 md:mt-0 h-[30vh] md:h-[28vh] md:mr-[3vh] bg-[#1E024D] p-5 rounded-lg shadow-lg text-center font-Poppins mr-[6vh] hover:shadow-2xl hover:border-b-2 border-dashed border-white rounded-lg transition-shadow duration-300">
          <h2 className="text-2xl text-blue-500 font-bold font-Poppins md:mb-2">Goal</h2>
          <p className="text-white text-sm md:text-[2.2vh] font-Poppins font-medium mb-2 md:mb-0">
            Our goal is to be a leading force in the integration of advanced technology. We strive to deliver innovative solutions that enhance security, efficiency, and growth across diverse sectors.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  
      <div className="flex flex-col md:mt-12 ml-[20vh] mt-[58vh]">
        <div className="flex flex-row items-center mt-[5vh] md:ml-[6vh] ml-[-18vh] space-x- mt-4">
          <FaStar className='text-[#1E024D] text-2xl shadow-lg ml-2'/>
          <p className="font-Poppins text-[3vh] font-bold text-[#330386]">Feedback</p>
        </div>
        <div className="md:flex md:justify-center flex justify-end md:scale-100 transition scale-90">
          <Feedback />
        </div>
      </div>

  
      <div className="flex justify-center mt-20">
        <Footer/>
      </div>
    </main>
  );
};

export default Homepage;