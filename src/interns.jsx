import { useState } from "react";
import React from "react";
import axios from "axios";

const Interns = () => {
  const [interndata, setInterndata] = useState({
    title: "",
    description: "",
    date: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInterndata({ ...interndata, [name]: value });
  };

  const handleFileChange = (e) => {
    setInterndata({ ...interndata, image: e.target.files[0] });
  };

  const formatDate = (dateString) => {
    const parts = dateString.split("/");
    if (parts.length === 3) {
      const [day, month, year] = parts;
      return `${year}-${month}-${day}`; 
    }
    return dateString;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", interndata.title);
    formData.append("description", interndata.description);
    formData.append("date", formatDate(interndata.date)); 
    formData.append("image", interndata.image);

    try {
      await axios.post("http://localhost:3000/Internship/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
      alert("Internship uploaded successfully!");
    } catch (error) {
      alert("Failed to upload internship.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row gap-4">
  
        <input
          type="text"
          name="title"
          placeholder="Internship title"
          onChange={handleChange}
          required
          className="p-2 focus:outline-none focus:ring-1 border border-gray-400 rounded w-full"
        />

    
        <textarea
          name="description"
          placeholder="Internship description"
          onChange={handleChange}
          required
          className="p-2 focus:outline-none focus:ring-1 border border-gray-400 rounded w-full"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
      
        <input
          type="date"
          name="date"
          placeholder="dd/mm/yyyy"
          onChange={handleChange}
          required
          className="p-2 focus:outline-none focus:ring-1 border border-gray-400 rounded w-full"
        />

  
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          required
          className="p-2 focus:outline-none focus:ring-1 border border-gray-400 rounded w-full"
        />
      </div>


      <div className="mt-6">
        <button
          type="submit"
          className="bg-red-500 w-full sm:w-auto px-6 py-2 font-Poppins font-semibold text-white text-lg hover:text-red-500 hover:bg-white border border-gray-600 rounded shadow-lg transition-all duration-300"
        >
          Upload Internships
        </button>
      </div>
    </form>
  );
};

export default Interns;