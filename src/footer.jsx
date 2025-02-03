import React from "react";
import msg from './images/msg.svg';
import loca from './images/loca.svg';
import phone from './images/phone.svg';
import fb from './images/fb.svg';
import link from './images/linked.svg';
import x from './images/X.svg';
import you from './images/you.svg';


const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#1E024D] to-purple-900 w-full py-8">
      <div className="container mx-auto px-4">
  
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
      
          <div className="flex flex-col items-center md:items-start md:ml-[12vh]">
            <p className="text-white text-lg">Partnered by</p>
            <p className="font-Poppins font-black md:text-[#330386] text-[#1E024D] text-4xl mt-2">E.BRIDGE</p>
            <button className="text-white text-lg mt-8 hover:text-purple-200 md:mt-[10vh]">
              Terms & Privacy policy
            </button>
          </div>

    
          <div className="flex ml-[9vh] md:ml-0 text-white flex-col space-y-4">
            <p className="font-Poppins font-bold text-white ml-[8vh] md:ml-0 text-lg">Contacts:</p>
            <div className="flex items-center space-x-2 hover:text-purple-200">
              <img src={msg} alt="Email" width={30} height={24} />
              <a href="mailto:hbspacelt@gmail.com">hbspacelt@gmail.com</a>
            </div>
            <div className="flex items-center space-x-2 hover:text-purple-200">
              <img src={phone} alt="Phone" width={30} height={24} />
              <a href="tel:+265999916443">Tel: +265 9999 1644 3</a>
            </div>
            <div className="flex items-center space-x-2 hover:text-purple-200">
              <img src={loca} alt="Location" width={30} height={24} />
              <div>
                <p>Zomba City, Office number 23</p>
                <p>Near Ndola.</p>
              </div>
            </div>
          </div>

    
          <div className="flex flex-col space-y-4 md:ml-0 ml-[8vh] md:mr-[4vh]">
            <p className="font-Poppins font-bold text-white text-lg md:ml-0 ml-3">
              Subscribe to our newsletter
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 ml-[-4vh] md:ml-0 mr-5 md:mr-0">
              <input
                type="text"
                placeholder="Enter email Address"
                className="p-2 w-full md:w-64 text-md text-gray-800 font-medium rounded-full md:rounded-l md:rounded-r-none focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-900 to-[#330386] border w-[16vh] ml-[11vh] md:ml-0 text-white p-3 rounded-full shadow-lg md:rounded-l-none md:rounded-r hover:from-[#330386] hover:to-purple-900 transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
            <div className="flex md:space-x-4 ml-[-4vh] space-x-12 mt-4 md:ml-[-1vh]">
              <a
                href="https://web.facebook.com/search/top?q=hb%20space%20lt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-[#330386] rounded-full p-2 transition-colors md:mt-8"
              >
                <img src={fb} alt="Facebook" md:width={24} md:height={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-[#330386] rounded-full p-2 transition-colors md:mt-8"
              >
                <img src={link} alt="LinkedIn" md:width={24} height={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-[#330386] rounded-full p-2 transition-colors md:mt-8"
              >
                <img src={you} alt="YouTube" md:width={24} height={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-[#330386] rounded-full p-2 transition-colors md:mt-8"
              >
                <img src={x} alt="X" md:width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;