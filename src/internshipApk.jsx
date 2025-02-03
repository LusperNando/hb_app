import React, { useState } from "react";
import Navigation from "./nav";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InternshipApk = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    college: "",
    degree: "",
    Duration: "",
    Reason_For_Applying: "",
    Reason_For_Work: "",
    Experience: "",
    Resume: "",
  });
  const [resume, setResume] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("college", formData.college);
    data.append("degree", formData.degree);
    data.append("Duration", formData.Duration);
    data.append("Reason_For_Applying", formData.Reason_For_Applying);
    data.append("Reason_For_Work", formData.Reason_For_Work);
    data.append("Experience", formData.Experience);
    data.append("Resume", resume);

    try {
      await axios.post("http://localhost:3000/application/apply", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Application submitted successfully!!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        college: "",
        degree: "",
        Duration: "",
        Reason_For_Applying: "",
        Reason_For_Work: "",
        Experience: "",
        Resume: "",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again");
    }
  };

  return (
    <div>
  
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-12">
        <p className="font-Poppins text-sm sm:text-lg font-medium text-gray-600">
          Business Reg No: BRN-R7TAWMK
        </p>
        <p className="font-Poppins text-sm sm:text-lg font-medium text-gray-600 mt-2 sm:mt-0">
          Email ID: hbspacelt@gmail.com
        </p>
      </div>

    
      <Navigation />

  
      <form onSubmit={handleSubmit}>
        <div className="ml-4 sm:ml-[10vh]">
          <div className="flex justify-center">
          <h1 className="font-Poppins text-blue-500 font-bold mt-8 mb-2 md:mr-[7vh] md:text-[3vh]">APPLY HERE!!!</h1>
          </div>
          <div className=" ml-12 sm:ml-[75vh] border-t-2 border-blue-500 w-[30vh] animate-ping rounded-full"></div>

  
          <div className="text-gray-800 flex flex-col sm:flex-row bg-white bg-center mt-10">
            <div className="mb-4 sm:mb-0">
              <label className="block mb-1 font-Poppins text-lg font-regular">Name:</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="rounded-full text-md text-gray-800 font-semibold font-Poppins border border-gray-300 focus:outline-none focus:border-blue-500 p-3 w-full sm:w-[45vh]"
              />
            </div>
            <div className="mb-4 sm:mb-0 sm:ml-8">
              <label className="block mb-1 font-Poppins text-lg font-regular">Contact:</label>
              <input
                onChange={handleChange}
                type="text"
                name="phone"
                placeholder="Mobile No:"
                required
                className=" rounded-full text-md font-semibold font-Poppins border  border-gray-300 focus:outline-none focus:border-blue-500 p-3 w-full sm:w-[45vh]"
              />
            </div>
            <div className="mb-4 sm:mb-0 sm:ml-8">
              <label className="block mb-1 font-Poppins text-lg font-regular">Email:</label>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email:"
                required
                className="rounded-full text-md  border-gray-300 focus:outline-none focus:border-blue-500 font-semibold font-Poppins border p-3 w-full sm:w-[45vh]"
              />
            </div>
          </div>

      
          <div className="flex flex-col sm:flex-row mt-8">
            <div className="mb-4 sm:mb-0">
              <label className="block mb-1 font-Poppins text-lg font-regular">University Name:</label>
              <input
                onChange={handleChange}
                type="text"
                name="college"
                placeholder="Optional"
                required
                className="rounded-full text-md font-Poppins  border-gray-300 focus:outline-none focus:border-blue-500 font-semibold border p-3 w-full sm:w-[45vh]"
              />
            </div>
            <div className="mb-4 sm:mb-0 sm:ml-8">
              <label className="block mb-1 font-Poppins text-lg font-regular">Degree Pursuing:</label>
              <input
                onChange={handleChange}
                type="text"
                name="degree"
                placeholder="Optional"
                required
                className=" border-gray-300 focus:outline-none focus:border-blue-500 rounded-full text-md font-Poppins font-semibold border p-3 w-full sm:w-[45vh]"
              />
            </div>
            <div className="mb-4 sm:mb-0 sm:ml-8">
              <label className="block mb-1 font-Poppins text-lg font-regular">When will you join:</label>
              <input
                onChange={handleChange}
                type="date"
                name="date"
                placeholder="Optional"
                required
                className=" border-gray-300 focus:outline-none focus:border-blue-500 rounded-full text-md font-Poppins font-semibold border p-3 w-full sm:w-[45vh]"
              />
            </div>
          </div>

        
          <div className="flex flex-col mt-8">
            <label className="block mb-1 font-Poppins text-lg font-regular">How long will you take?</label>
            <div className="flex flex-col sm:flex-row">
              <div className="mt-4 sm:mt-0 sm:ml-4 md:ml-[-0.5vh]">
                <input
                  onChange={handleChange}
                  type="text"
                  name="Duration"
                  placeholder="Specify months, days, etc.."
                  className=" border-gray-300 focus:outline-none focus:border-blue-500 rounded-full text-md font-Poppins font-semibold border p-3 w-full sm:w-[45vh]"
                />
              </div>
            </div>
          </div>

    
          <div className="mt-8">
            <label className="block mb-1 font-Poppins text-lg font-regular">Why do you want to apply?</label>
            <textarea
              onChange={handleChange}
              type="text"
              name="Reason_For_Applying"
              required
              className=" border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg text-md font-Poppins font-semibold border p-3 md:w-[185vh]"
            />
          </div>

        
          <div className="mt-8">
            <label className="block mb-1 font-Poppins text-lg font-regular">Why do you want to work for Hb Space?</label>
            <textarea
              onChange={handleChange}
              type="text"
              name="Reason_For_Work"
              required
              className=" border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg text-md font-Poppins font-semibold border p-3 md:w-[185vh]"
            />
          </div>

          
          <div className="flex flex-col sm:flex-row mt-8">
            <div className="mb-4 sm:mb-0">
              <label className="block mb-1 font-Poppins text-lg font-regular">Mention your experience (if any):</label>
              <input
                onChange={handleChange}
                type="text"
                name="Experience"
                placeholder="Optional"
                className=" border-gray-300 focus:outline-none focus:border-blue-500 rounded-full text-md font-Poppins font-semibold border p-3 w-full sm:w-[60vh]"
              />
            </div>
            <div className="mb-4 sm:mb-0 sm:ml-8">
              <label className="block mb-1 font-Poppins text-lg font-regular">Attach Resume:</label>
              <input
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                type="file"
                name="Resume"
                placeholder="Optional"
                className=" border-gray-300 focus:outline-none focus:border-blue-500 rounded-full text-md font-Poppins text-gray-800 font-semibold border p-3 w-full sm:w-[45vh]"
              />
            </div>
          </div>

        
          <div className="mt-8 flex flex-row space-x-4 md:space-x-0">
            <div>
            <button
              type="submit"
              id="submit"
              className="border bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 w-[20vh] p-2 rounded-full text-white font-Poppins font-bold shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-700"
            >
              Apply
            </button>
            </div>
              <div>
              <button
              onClick={() => navigate(-1)}
              className="border shadow-lg bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-full w-[20vh]  md:ml-[10vh] font-Poppins font-bold shadow-lg focus:outline-none focus:ring-1 focus:ring-gray-600"
              >
              Back
             </button>
              </div>
          </div>
        </div>
      </form>


      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default InternshipApk;