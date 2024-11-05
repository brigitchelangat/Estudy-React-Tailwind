
import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Courses from './components/Courses';
import Dashboard from './components/Dashboard';
import Webinars from './components/Webinars';
import Blogs from './components/Blogs';
import Resources from './components/Resources';
import { BrowserRouter , Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="App w-full h-full flex flex-row">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}