import React from 'react';
import polygon from './images/Polygon.svg';

const ScrollingText = () => {
  return (
    <div className="flex justify-between absolute ml-[90%] md:mr-[28vh] md:overflow-hidden overflow-hidden whitespace-nowrap text-gray-600 w-full">
      <div className="animate-scroll hover:animate-none space-y-4">
        <div className="flex flex-row items-center gap-x-2">
          <img src={polygon} alt="pointer" className="w-4 md:w-6" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-4">
            <p className="font-Poppins font-regular text-sm md:text-base">
              Hb Space Tl launched...
            </p>
            <button className="font-Poppins font-medium text-sm text-[#F40404]">
              see more
            </button>
          </div>
        </div>
      
        <div className="flex flex-row items-center gap-x-2">
          <img src={polygon} alt="pointer" className="w-4 md:w-6" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-4">
            <p className="font-Poppins font-regular text-sm md:text-base">
              On the launch we had Incubator...
            </p>
            <button className="font-Poppins font-medium text-sm text-[#F40404]">
              see project
            </button>
          </div>
        </div>
        
        <div className="flex flex-row items-center gap-x-2">
          <img src={polygon} alt="pointer" className="w-4 md:w-6" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-4">
            <p className="font-Poppins font-regular text-sm md:text-base">
              On the launch we had Smart bin...
            </p>
            <button className="font-Poppins font-medium text-sm text-[#F40404]">
              see project
            </button>
          </div>
        </div>
  
        <div className="flex flex-row items-center gap-x-2">
          <img src={polygon} alt="pointer" className="w-4 md:w-6" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-4">
            <p className="font-Poppins font-regular text-sm md:text-base">
              On the launch we had obstacle...
            </p>
            <button className="font-Poppins font-medium text-sm text-[#F40404]">
              see project
            </button>
          </div>
        </div>
  
        <div className="flex flex-row items-center gap-x-2">
          <img src={polygon} alt="pointer" className="w-4 md:w-6" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-4">
            <p className="font-Poppins font-regular text-sm md:text-base">
              On the launch we had premises...
            </p>
            <button className="font-Poppins font-medium text-sm text-[#F40404]">
              see project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
