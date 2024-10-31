import React, { useState, useEffect } from "react";
import allCourses from "../data/courses.json";
import { FaRegUser, FaSearch, FaFilter, FaToggleOn } from "react-icons/fa";
import { BsClock, BsGlobe, BsHouseDoor, BsFillStarFill, BsArrowRightSquare   } from "react-icons/bs";
import { CohortData } from "./UpcomingCohorts";

const Course = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(allCourses.courses);
  }, []);
  //JSX to be returned
  return (
    <div className="courses">
      <div className="before-courses">
        <h1>Explore Training Programs</h1>
        <div style={{ position: "relative" }}>
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search courses..."
            className="search"
          />
          <FaFilter className="filter-icon" size={19} />
          <FaToggleOn className="toggle" size={35} />
          <span>Available</span>
        </div>
      </div>

      {courses.map((course) => (
        <div
          className="course-card"
          id={window.location.pathname === `/${course.id}` ? "active" : ""}
          onClick={() => {
            window.location.pathname = `/${course.id}`;
          }}
        >
          <div className="course-details">
            <p className="course-title">{course.title}</p>
            <FaRegUser className="course-icons first-icon" />
            <span>{course.instructor}</span>
            <BsClock className="course-icons" />
            <span>{course.hours} Hours</span>
            {course.location == "online" ? (
              <BsGlobe className="course-icons" size={25} />
            ) : (
              <BsHouseDoor className="course-icons" size={25} />
            )}
            <span>{course.location == "online" ? "Online" : "Physical"}</span>
            <p className="course-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              fuga maxime debitis exercitationem cupiditate neque accusantium
              dolores? Ratione enim alias debitis, illum temporibus at corrupti
              atque nobis, aliquam inventore esse!
            </p>
          </div>
          <div id="separator"></div>
          <div className="upcoming-cohorts">
          <p id="cohorts">Upcoming Cohorts</p>
          <BsFillStarFill className="star"  size={27}/>
          <span className="rating">4.5</span>
            <ul className="cohort-list">
              {CohortData.map((val, key) => {
                return (
                  <li key={key} className="cohort-row">
                    <div id="icon">{val.icon}</div>
                    <div id="date">{val.date}</div>
                  </li>
                );
              })}
            </ul>
            <BsArrowRightSquare className="arrow" size={32} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Course;
