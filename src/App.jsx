import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './homepage';
import SignIn from './signin';
import Account from './register';
import AdminDashboard from './adminDashboard';
import Events from './events';
import Internship from './internships';
import InternshipApk from './internshipApk';
import ProtectedRoute from './protectedRoute';
import Projects from './projects';
import ProjectDetails from './projectDetails';
import { useAuth } from './AuthContext';



function App() {
  const { isAuthenticated } =useAuth();
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/register" element={<Account/>} />
          <Route path="/up-events" element={<Events/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/intern"element={<Internship/>}/>
          <Route path="/project"element={<Projects/>}/>

          <Route
          path="/apply"
          element={
            <ProtectedRoute>
              <InternshipApk />
            </ProtectedRoute>
           }
          />
          <Route
          path="/project/:id"
          element={
            <ProtectedRoute>
              <ProjectDetails />
            </ProtectedRoute>
           }
          />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
