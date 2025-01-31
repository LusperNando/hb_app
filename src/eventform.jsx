import React, { useState } from "react";
import axios from "axios";

const EventForm = () => {
  const [eventdata, setEventdata] = useState({
    title: "",
    description: "",
    date: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventdata({ ...eventdata, [name]: value });
  };

  const handleFileChange = (e) => {
    setEventdata({ ...eventdata, image: e.target.files[0] });
  };

  const formatDate = (dateString) => {
    const parts = dateString.split("/");
    if (parts.length === 3) {
      const [day, month, year] = parts;
      return `${year}-${month}-${day}`; // Converts dd/mm/yyyy → yyyy-mm-dd
    }
    return dateString;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", eventdata.title);
    formData.append("description", eventdata.description);
    formData.append("date", formatDate(eventdata.date)); 
    formData.append("image", eventdata.image);

    try {
      await axios.post("http://localhost:3000/events/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
      alert("Event uploaded successfully!");
    } catch (error) {
      alert("Failed to upload event.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row gap-4">
  
        <input
          type="text"
          name="title"
          placeholder="Event title"
          onChange={handleChange}
          required
          className="p-2 focus:outline-none focus:ring-1 border border-gray-400 rounded w-full"
        />


        <textarea
          name="description"
          placeholder="Event description"
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
          className="p-2 focus:outline-none focus:ring-1 border border-gray-400 rounded w-full"
        />

      
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="p-2 focus:outline-none focus:ring-1 border border-gray-400 rounded w-full"
        />
      </div>

    
      <div className="mt-6">
        <button
          type="submit"
          className="bg-red-500 w-full sm:w-auto px-6 py-2 font-Poppins font-semibold text-white text-lg hover:text-red-500 hover:bg-white border border-gray-600 rounded shadow-lg transition-all duration-300"
        >
          Upload Events
        </button>
      </div>
    </form>
  );
};

export default EventForm;