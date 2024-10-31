
import React from 'react';
import Course from './components/Course';
import Navigation from './components/Navigation';
export default function App() {
  return (
    <div className="App w-full h-full flex flex-row">
      <Navigation/>
      <Course/>
    </div>
  );
}