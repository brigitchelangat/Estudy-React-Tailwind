import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import allCourses from '../data/courses.json';

const CourseDetails = () =>{
    const location = useLocation(); 
    const { courseId } = location.state || {}; 
    const [course, setCourse] = useState(null);
    
    useEffect(() => {
      // Assuming `courseData` is an array of courses
        const selectedCourse = allCourses.courses.find((c) => c.id === courseId);
        setCourse(selectedCourse);
    }, [courseId]);

    if (!course) {
        return (
            <div className='h-full w-full'>
                <div>Course not found..</div>
            </div>);
        }
    return(
        <div className='h-full w-full'>
            <div className='top-bar text-white pl-16 pt-10 h-[250px] bg-gradient-to-r from-brand to-brand-light'>
                <h1 className=' text-base  mb-5'> <Link to={'/courses'} replace className='hover:underline hover:text-brand-light'>Courses </Link> &gt; {course.title} </h1>
                <p className='text-base font-semibold mb-4 '>{course.domain}</p>
                <p className='font-bold text-3xl mb-6'>{course.title}</p>
                <p>
                    <span>4.2</span>
                    <span>{course.hours} Hours</span>
                    <span>~66,350+ Enrolled Leaners</span>
                </p>
            </div>
            <div className='grid grid-cols-6 pt-5 pl-16'>
            <div className='course-content col-span-4 '>
                <div className='about-course h-20 bg-white mb-4'>About Course</div>
                <div className='course-content h-20 bg-white mb-4'>Course Content- 17 sections</div>
                <div className='certificate h-20 bg-white mb-4'>Certificate of completion</div>
                <div className='reviews h-20 bg-white mb-4'>Reviews</div>
            </div>
            <div className='key-takeaways col-span-2 h-96 p-3'>
                <div className='h-full w-full bg-white'></div>
            </div>
            </div>
            
        </div>
        
    );
}
export default CourseDetails;