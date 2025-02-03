import React from 'react';
import polygon from './images/Polygon.svg';

const ScrollingText = () => {
  return (
    <div className="flex justify-between rounded-lg md:shadow-md absolute md:ml-[90%] md:mr-[145vh] bg-gradient-to-r from-blue-50 to-purple-50 h-[34vh] md:w-[80vh] md:overflow-hidden overflow-hidden whitespace-nowrap text-gray-800 w-[42vh] mr-4 md:border-none  border-r-2 border-l-2 border-[#1E024D] ">
      <div className="animate-scroll hover:animate-none ml-2 md:ml-1 space-y-4 w-[90vh]">
        <div className="flex flex-row items-center gap-x-2">
          <img src={polygon} alt="pointer" className="w-4 md:w-6" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-4">
            <p className="font-Poppins font-regular text-sm md:text-base">
              Hb Space Tl launched...
            </p>
          </div>
        </div>
      
        <div className="flex flex-row items-center gap-x-2">
          <img src={polygon} alt="pointer" className="w-4 md:w-6" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-4">
            <p className="font-Poppins font-regular text-sm md:text-base">
              On the launch we had Incubator...
            </p>
          </div>
        </div>
        
        <div className="flex flex-row items-center gap-x-2">
          <img src={polygon} alt="pointer" className="w-4 md:w-6" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-4">
            <p className="font-Poppins font-regular text-sm md:text-base">
              On the launch we had Smart bin...
            </p>
          </div>
        </div>
  
        <div className="flex flex-row items-center gap-x-2">
          <img src={polygon} alt="pointer" className="w-4 md:w-6" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-4">
            <p className="font-Poppins font-regular text-sm md:text-base">
              On the launch we had obstacle...
            </p>
          </div>
        </div>
  
        <div className="flex flex-row items-center gap-x-2">
          <img src={polygon} alt="pointer" className="w-4 md:w-6" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-4">
            <p className="font-Poppins font-regular text-sm md:text-base">
              On the launch we had premises...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;
