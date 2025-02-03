import React, { useEffect, useState } from "react";
import star from "./images/Star 1.svg";
import Navigation from "./nav";
import axios from "axios";
import Footer from "./Footer";
import { FaStar } from "react-icons/fa";

const Events = () => {
  const [events, setEvents] = useState([]);
  const BASE_URL = "http://localhost:3000";

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/events`);
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

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
      <Navigation />


      <div className="ml-4 sm:ml-[37vh]">
        <div className="flex flex-row mt-12">
          <FaStar className="text-2xl shadow-lg text-[#1E024D] mt-3 md:mt-2" />
          <p className="font-Poppins text-[3.5vh] font-bold ms-1 text-[#330386]">Our Events</p>
        </div>
        <div className="flex flex-col mt-8 ml-3">
          <label htmlFor="search" className="text-gray-800 text-[2.4vh] my-2">
            Search
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search for events"
            className="w-[40vh] sm:w-[120vh] md:p-3 p-2 border text-gray-800  border-gray-300 focus:outline-none focus:border-blue-500 md:rounded rounded-lg"
          />
        </div>
      </div>


      <div className="flex justify-center font-Poppins font-medium mt-6 ">
        <div className="flex flex-row mr-2">
          <FaStar className="text-2xl shadow-lg text-[#1E024D] mt-1" />
          <h1 className="text-gray-800 text-[2.5vh] font-medium ms-1">
            Upcoming Events at{" "}
            <label className="text-[#330386] font-bold">Hb Space Tl</label>
          </h1>
        </div>
      </div>


      <div className="md:ml-4 sm:ml-[10vh] mr-4 md:mr-14">
        <div className="mt-[12vh] ml-4 sm:ml-[8vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-[8vh]">
            {events.map((event) => (
              <div
                className="font-Poppins font-medium text-[2.2vh] text-gray-800"
                key={event.id}
              >
                <img
                  src={`${BASE_URL}/${event.imageurl}`}
                  alt={event.title}
                  className="object-cover border-t-4 border-b-4 border-[#1E024D] rounded-lg h-[30vh] w-full"
                  onError={(e) => {
                    e.target.alt = "Image not found";
                  }}
                />
                <h2 className="mt-2 text-xl font-bold">{event.title}</h2>
                <p className="text-gray-600">{event.description}</p>
                <p className="text-gray-500">{new Date(event.date).toDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-[16vh]">
        <Footer />
      </div>
    </div>
  );
};

export default Events;