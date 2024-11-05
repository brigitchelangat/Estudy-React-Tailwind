import React, { useState, useEffect } from "react";
import allCourses from "../data/courses.json";
import defaultI from "../assets/images/default.png"
import SE from "../assets/images/SE.jpg";
import Web from "../assets/images/Web.jpg";
import Cloud from "../assets/images/Cloud.jpg";
import DataS from "../assets/images/DataS.jpg";
import AI from "../assets/images/AI.jpg";
import { FaSearch, FaFilter, FaToggleOn } from "react-icons/fa";
import { BsClock, BsGlobe, BsHouseDoor, BsPerson   } from "react-icons/bs";
import { CourseInfo } from "./NavigationData";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(allCourses.courses);
  }, []);

  // Switching course images
  const getCourseImage = (title) => {
    switch (title) {

      case 'Software Engineering':
        return SE;
      
      case 'Web Development':
        return Web;

      case 'Cloud Computing':
        return Cloud;

      case 'Data Science':
        return DataS;

      case 'Artificial Intelligence':
        return AI;

      default:
        return defaultI;
    }
  };
  //JSX to be returned
  return (
    <div className="h-full ml-40">
      <div className="pl-3 pt-7 pb-3 fixed z-auto bg-gray-100 w-full">
        <h1 className="font-bold text-gray-800 text-3xl mb-5">Explore Training Programs</h1>
        <div  className="relative">
          <FaSearch className="absolute left-3 top--1/2 translate-y-2/3 text-brand" />
          <input
            type="text"
            placeholder="Search courses..."
            className="py-2 pr-2.5 pl-9 sm:w-[300px] sm:mr-[50px]  md:mr-[100px] xl:mr-[450px] lg:w-[500px] lg:mr-[200px] bg-white border-none  rounded-[20px] "
          />
          <FaFilter className="filter-icon text-brand cursor-pointer mr-5 align-middle inline-block" size={17} />
          <FaToggleOn className="toggle inline-block text-brand cursor-pointer mr-2 " size={25} />
          <span className="inline-block text-gray-900">Available</span>
        </div>
      </div>

      <div className="courses mt-36">
      {
        courses.map((course) => (
        
        <div
          className="course-card grid grid-cols-6 bg-white m-2.5 p-2.5 rounded-xl cursor-pointer
          rounded-l-none min-h-[100px] w-97 h-[240px]"
          id={window.location.pathname === `/${course.id}` ? "selected" : ""}
          onClick={() => {
            window.location.pathname = `/${course.id}`;
          }}
        >
          <div className="lg:col-span-1 h-[220px] hidden lg:block ">
          <img src={getCourseImage(course.domain)} alt="Course" className="h-5/6 m-2 w-full rounded-md" />
          </div>
          <div className="course-details sm:col-span-6 md:col-span-4 lg:col-span-4 h-[220px] p-5 pt-2">
            <p className="font-semibold text-gray-900 text-xl pb-3">{course.title}</p>
            <BsPerson className="text-brand mr-2 mb-1 ml-0 inline-block" size={17} />
            <span>{course.instructor}</span>
            <BsClock className="course-icons inline-block" size={15} />
            <span>{course.hours} Hours</span>
            {course.location === "online" ? (
              <BsGlobe className="course-icons inline-block" size={15}/>
            ) : (
              <BsHouseDoor className="course-icons inline-block" size={15}/>
            )}
            <span>{course.location === "online" ? "Online" : "Physical"}</span>
            <p className="course-desc text-gray-500 mt-3 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              fuga maxime debitis exercitationem cupiditate neque accusantium
              dolores?
            </p>
            <div id="separator"></div>
          </div>
          <div className="sm:hidden md:block md:col-span-2 h-[220px] lg:col-span-1">
          <p id="cohorts" className="text-lg font-semibold text-gray-900 pb-3">Course Info</p>
            <ul className="cohort-list list-none">
              {CourseInfo.map((val, key) => {
                return (
                  <li key={key} className="cohort-row flex flex-row items-center gap-x-4 mb-4">
                    <div id="icon" className="text-brand">{val.icon}</div>
                    <div id="date" className="text-gray-900 text-base">{val.no}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        
        ))
      }
      </div>
    </div>
  );
};
export default Courses;
