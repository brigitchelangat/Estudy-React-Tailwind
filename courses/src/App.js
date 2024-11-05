
import React from 'react';
import Courses from './components/Courses';
import './App.css';
import Navigation from './components/Navigation';
export default function App() {
  return (
    <div className="App w-full h-full flex flex-row">
      <Navigation/>

      <Courses/>
      
      
    </div>
  );
}