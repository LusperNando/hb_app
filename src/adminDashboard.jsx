import React from "react";
import EventForm from "./eventform";
import star from './images/Star 1.svg';
import Navigation from "./nav";
import Footer from "./Footer";
import Interns from "./interns";
import ProjectForm from "./projectForm";

function AdminDashboard() {
  return (
    <div>
      <Navigation />
      <div className="mt-8 sm:mt-12 px-4 sm:px-0">
        <div className="bg-white border-t-2 border-b-2 border-red-500 font-Poppins font-medium w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto md:h-[100vh] sm:h-[40vh] shadow-2xl p-4 sm:p-6">
         
          <div className="flex flex-row items-center">
            <img src={star} alt="star" width={30} height={24} />
            <h1 className="text-red-500 font-bold text-xl ms-2">Admin Dashboard</h1>
          </div>
          <section className="mt-6">
            <EventForm />
            <Interns />
            <ProjectForm/>
          </section>
        </div>
      </div>

     
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default AdminDashboard;