import React from "react";
import msg from './images/msg.svg';
import loca from './images/loca.svg';
import phone from './images/phone.svg';
import fb from './images/fb.svg';
import link from './images/linked.svg';
import x from './images/X.svg';
import you from './images/you.svg';
import copy from './images/copyright.svg';

const Footer = () => {
  return (
    <div className="bg-black opacity-[90%] w-full py-8">
      <div className="container mx-auto px-4">
  
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
      
          <div className="flex flex-col items-center md:items-start md:ml-[12vh]">
            <p className="text-white text-lg">Partnered by</p>
            <p className="font-Poppins font-bold text-[#F40404] text-4xl mt-2">E.BRIDGE</p>
            <button className="text-white text-lg mt-8 hover:text-red-600 md:mt-[8vh]">
              Terms & Privacy policy
            </button>
          </div>

    
          <div className="flex text-white flex-col space-y-4">
            <p className="font-Poppins font-regular text-white text-lg">Contact</p>
            <div className="flex items-center space-x-2 hover:text-red-600">
              <img src={msg} alt="Email" width={30} height={24} />
              <a href="mailto:hbspacelt@gmail.com">hbspacelt@gmail.com</a>
            </div>
            <div className="flex  items-center space-x-2 hover:text-red-600">
              <img src={phone} alt="Phone" width={30} height={24} />
              <a href="tel:+265999916443">Tel: +265 9999 1644 3</a>
            </div>
            <div className="flex items-center space-x-2 hover:text-red-600">
              <img src={loca} alt="Location" width={30} height={24} />
              <div>
                <p>Zomba City, Office number 23</p>
                <p>Near Ndola.</p>
              </div>
            </div>
          </div>

  
          <div className="flex flex-col space-y-4 md:ml-0 ml-[8vh] md:mr-[4vh]">
            <p className="font-Poppins font-regular text-white text-lg md:ml-0 ml-3">
              Subscribe to our newsletter
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 mr-12">
              <input
                type="text"
                placeholder="Enter email Address"
                className="p-3 w-full md:w-64 text-md text-gray-800 font-medium rounded-full md:rounded-l md:rounded-r-none"
              />
              <button
                type="submit"
                className="bg-red-600 w-[16vh] ml-[6vh] md:ml-0 text-white p-3 rounded-full md:rounded-l-none md:rounded-r hover:bg-red-700 transition"
              >
                Subscribe
              </button>
            </div>
            <div className="flex space-x-4 mt-4 md:ml-[-1vh]">
              <a
                href="https://web.facebook.com/search/top?q=hb%20space%20lt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-red-600 rounded-full p-2 transition-colors"
              >
                <img src={fb} alt="Facebook" width={24} height={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-red-600 rounded-full p-2 transition-colors"
              >
                <img src={link} alt="LinkedIn" width={24} height={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-red-600 rounded-full p-2 transition-colors"
              >
                <img src={you} alt="YouTube" width={24} height={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-red-600 rounded-full p-2 transition-colors"
              >
                <img src={x} alt="X" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>

    
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 md:mt-16 md:mr-16 space-y-4 md:space-y-0 md:space-x-1 md:ml-auto">
          <p className="text-white">Hb space Tl copyright</p>
          <img src={copy} alt="Copyright" width={20} height={20} />
          <p className="text-white">2025 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;