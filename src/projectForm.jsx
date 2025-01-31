import React, { useState } from "react";
import axios from "axios";

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    price:"",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleFileChange = (e) => {
    setProjectData({ ...projectData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", projectData.title);
    formData.append("description", projectData.description);
    formData.append("price", projectData.price)
    formData.append("image", projectData.image);

    try {
      await axios.post("http://localhost:3000/project/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
      alert("Event uploaded successfully!");
      setProjectData({
        title: "",
        description: "",
        price:"",
        image: null,
      });
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
          placeholder="project title"
          onChange={handleChange}
          required
          className="p-2 focus:outline-none focus:ring-1 border border-gray-400 rounded w-full"
        />


        <textarea
          name="description"
          placeholder="project description"
          onChange={handleChange}
          required
          className="p-2 focus:outline-none focus:ring-1 border border-gray-400 rounded w-full"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
    
        <input
          type="text"
          name="price"
          placeholder="MKW"
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
          Upload project
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;