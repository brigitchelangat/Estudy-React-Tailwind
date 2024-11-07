import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import allCourses from '../data/courses.json';
import { KeyTakeaways } from "./NavigationData";
import {BsClock, BsStarFill, BsPeopleFill, BsHeart, BsDash} from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';

const CourseDetails = () =>{
    const location = useLocation(); 
    const { courseId } = location.state || {}; 
    const [course, setCourse] = useState(null);
    const [courseContent, setCourseContent] = useState(null);
    const [isActive,setIsActive] = useState(false);
    
    useEffect(() => {
        const selectedCourse = allCourses.courses.find((c) => c.id === courseId);
        setCourse(selectedCourse);
    }, [courseId]);

    useEffect(() => {
        const selectedCourseContent = allCourses.content.find((c) => c.course_id === courseId);
        setCourseContent(selectedCourseContent);
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
                <p className='text-[15px] font-semibold'>
                    <BsStarFill className='inline-block mb-1.5 mr-0.5 text-yellow-300'/> <span className='font-normal mr-10'>4.2</span>
                    <BsClock className='inline-block mb-1 mr-1' /> <span className='mr-10'>{course.hours} <span className='font-normal'>Hours</span></span>
                    <BsPeopleFill className='inline-block mb-1 mr-1'/> <span>~{course.enrollments}+ <span className='font-normal'>Enrolled Leaners</span></span>
                </p>
            </div>
            <div className='grid grid-cols-7 pt-5 pl-2 bg-gray-100 mx-auto w-90'>
            <div className='course-content col-span-5 '>
                <div className='about-course bg-white mb-4 rounded-lg px-4 py-5'>
                    <h1 className='text-gray-900 font-semibold text-lg mb-4'>About the Course</h1>
                    <p className='text-sm text-gray-500 font-medium mb-3'>{course.about}</p>
                </div>
                <div className='course-content h-auto bg-white mb-4 rounded-lg py-4'>
                    <div className="content-header pl-4 mb-3">
                        <p className='text-lg font-semibold text-gray-900'>Course Content</p>
                        <p className=' text-[15px] text-gray-500 font-medium mb-3'>{courseContent.modules.length} Sections </p>
                    </div>
                    <div className="accordion">  
                        {
                        courseContent.modules.map((val) => {
                            return(
                                <div className='accordion-item pl-4 py-4 border-t-[1px] hover:cursor-pointer' onClick={() => setIsActive(!isActive)}>
                                    <p className='font-medium'>{val.title}</p> 
                                </div>
                            
                            )
                        })
                    }
             
                    </div>

                </div>
                <div className='certificate h-20 bg-white mb-4 rounded-lg'>Certificate of completion</div>
                <div className='reviews h-20 bg-white mb-4 rounded-lg'>Reviews</div>
            </div>
            <div className='col-span-2 h-full px-5'>
                <div className='h-full w-full bg-white rounded-lg'>
                    <div className='actions py-5 pl-10 border-b-[1px]'>
                        <BsHeart className='inline-block mr-5 font-bold size-5'/>
                        <FaShare className='inline-block mr-5 size-5 mb-0.5'/>
                        <button className='bg-brand text-white py-2 px-7 font-semibold rounded-md hover:bg-brand-light hover:text-gray-800'>
                        Enroll Now</button>
                    </div>
                    <div className='key-takeaways pt-4 pl-5'>
                        <p className='font-semibold text-gray-900'>Key Takeaways</p>
                        <ul className="list-none w-full mt-2 h-auto">
                        {
                        KeyTakeaways.map((val,key) => {
                            return <li key={key} className='flex flex-row items-center gap-x-4 h-12 w-full pt-2 pr-1 pb-1 text-[15px] '>
                                <div id='icon' ><BsDash/></div>
                                <div id='title' >{val.title}</div>
                            </li>
                        })
                    }
                    </ul>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
        
    );
}
export default CourseDetails;