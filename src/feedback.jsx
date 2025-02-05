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
    <form onSubmit={handleSubmit} className=" md:ml-[6vh] border-t-2 border-b-2 border-[#330386] rounded-lg shadow-lg md:mr-[16vh] mx-2 md:mx-0 bg-white">
      <div className="md:flex md:justify-start flex justify-start rounded-lg md:w-[145vh] w-screen  md:mr-0 md:ml-12 md:h-[80vh] h-[75vh] md:mt-8 mt-4">
        <div className="mt-8 flex flex-col items-start w-full">
        
          <label className="block md:ml-2 mb-2 font-Poppins text-base md:text-lg font-regular ml-4">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="text-gray-800 font-semibold focus:outline-none focus:border-blue-500 font-Poppins md:text-[2.1vh] rounded-lg text-sm md:text-md font-Poppins border-gray-300 border p-3 md:w-[55vh] w-[93%] md:ml-[1vh] ml-4"
          />

        
          <label className="block md:ml-2 mb-2 font-Poppins text-base md:text-lg font-regular mt-6 ml-4">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="text-gray-800 font-semibold font-Poppins md:text-[2.1vh] rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-md font-Poppins p-3 md:w-[55vh] w-[93%] md:ml-[1vh] ml-4 border-gray-300 border"
          />

        
          <label className="block md:ml-2 mb-2 font-Poppins text-base md:text-lg font-regular mt-6 ml-4">
            Message:
          </label>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="text-gray-800 font-semibold font-Poppins md:text-[2.1vh] focus:border-blue-500 border rounded-lg md:ml-[1vh] w-[93%] md:w-[90vh] p-3 ml-4"
            rows={4}
          />

    
          <label className="block md:ml-2 mb-2 font-Poppins text-base md:text-lg font-regular mt-6 ml-4">
            Rating:
          </label>
          <div className="md:ml-[1vh] ml-4">
            <StarRating
              onRatingChange={handleRatingChange}
              initialRating={formData.rating}
            />
          </div>

      
          <button
            type="submit"
            className="bg-gradient-to-r from-[#330386] to-purple-900 hover:from-purple-900 hover:to-[#330386] rounded-full text-white font-bold border focus:outline-none focus:ring-1 focus:ring-blue-700  font-Poppins font-medium mt-6 md:mt-8 p-2 w-[93%] md:w-[12vh] md:ml-[1vh] ml-4"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Feedback;