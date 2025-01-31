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



function App() {
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

          <Route element={<ProtectedRoute/>}>
           <Route path="/apply"element={<InternshipApk/>}/>
          </Route>

          <Route element={<ProtectedRoute/>}>
           <Route path="/project/:id"element={<ProjectDetails/>}/>
          </Route>
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
