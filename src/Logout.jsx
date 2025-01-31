import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="group relative">
      <button
        onClick={handleLogout}
        className="flex items-center rounded-lg transition-all duration-300"
      >
        <FaSignOutAlt className="w-6 h-6" />
      </button>

    
      <div className="absolute top-10 ml-[-2.5vh] font-Poppins font-bold text-white text-sm px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Logout
      </div>
    </div>
  );
};

export default Logout;