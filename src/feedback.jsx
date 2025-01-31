import React, { useState } from "react";
import StarRating from "./ratings";
import axios from "axios";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating: rating });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("rating", formData.rating);

    for (let [key, value] of data.entries()) {
      console.log(key, value);
    }

    try {
      await axios.post("http://localhost:3000/feedback/submit", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="md:ml-[6vh] md:mr-[23vh] mx-6 md:mx-0">
      <div className="md:flex md:justify-start flex justify-start border-t-2 border-b-2 border-red-500 bg-white bg-center md:w-[146vh] w-full mr-16 md:mr-0 ml-2 md:ml-none shadow-2xl md:h-[80vh] h-[70vh] md:mt-8 mt-4">
        <div className="mt-8 flex flex-col items-start w-full">
        
          <label className="block md:ml-28 mb-2 font-Poppins text-base md:text-lg font-regular ml-4">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="text-black font-semibold font-Poppins md:text-[2.1vh] shadow rounded-full text-sm md:text-md font-Poppins border-gray-200 border-2 p-3 md:w-[55vh] w-[90%] md:ml-[14vh] ml-4"
          />

        
          <label className="block md:ml-28 mb-2 font-Poppins text-base md:text-lg font-regular mt-6 ml-4">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="text-black font-semibold font-Poppins md:text-[2.1vh] shadow rounded-full text-sm md:text-md font-Poppins p-3 md:w-[55vh] w-[90%] md:ml-[14vh] ml-4 border-gray-200 border-2"
          />

        
          <label className="block md:ml-28 mb-2 font-Poppins text-base md:text-lg font-regular mt-6 ml-4">
            Message:
          </label>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="text-black font-semibold font-Poppins md:text-[2.1vh] shadow border-gray-200 border-2 rounded-lg md:ml-[14vh] w-[90%] md:w-[90vh] p-3 ml-4"
            rows={4}
          />

    
          <label className="block md:ml-28 mb-2 font-Poppins text-base md:text-lg font-regular mt-6 ml-4">
            Rating:
          </label>
          <div className="md:ml-[14vh] ml-4">
            <StarRating
              onRatingChange={handleRatingChange}
              initialRating={formData.rating}
            />
          </div>

      
          <button
            type="submit"
            className="bg-red-600 border focus:outline-none focus:ring-1 focus:ring-red-600 hover:bg-gray-200 hover:text-red-500 text-white font-Poppins font-medium mt-6 md:mt-8 rounded p-2 w-[90%] md:w-[12vh] md:ml-[14vh] ml-4"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Feedback;