import React from "react";
import { BsGrid, BsCardChecklist, BsPeopleFill, BsListUl, 
    BsFillStarFill, BsPersonWorkspace, BsBookmarkDash,BsFileText } from "react-icons/bs";

export const NavigationData = [
    {
        id: 1,
        title: "Dashboard",
        icon: <BsGrid />,
        link: "/dashboard"
    },
    {
        id: 2,
        title: "Courses",
        icon: <BsCardChecklist />,
        link: "/courses"
    },
    {
        title: "Resources",
        icon: <BsBookmarkDash />,
        link: "/resources"
    },
    {
        id: 3,
        title: "Webinars",
        icon: <BsPersonWorkspace />,
        link: "/webinars"
    },
    {
        id: 4,
        title: "Blogs",
        icon: <BsFileText />,
        link: "/blogs"
    }
]

export const CourseInfo = [
    {
        id: 1,
        title:"learners",
        no: "45",
        icon: <BsPeopleFill />
    },
    {
        id: 2,
        title:"lessons",
        no: "15",
        icon: <BsListUl />
    },
    {
        id: 3,
        title:"rating",
        no:"4.5",
        icon: <BsFillStarFill />
    }
]

export const KeyTakeaways = [
    {
        id: 1,
        title:"Learn from Industry Leaders",
        icon: <BsFillStarFill />
    },
    {
        id: 2,
        title:"Industry aligned Projects",
        icon: <BsFillStarFill />
    },
    {
        id: 3,
        title:"Certification",
        icon: <BsFillStarFill />
    },
    {
        id: 4,
        title:"Personalized Career Coaching",
        icon: <BsFillStarFill />
    },
    {
        id: 5,
        title:"Case Study-Based Learning",
        icon: <BsFillStarFill />
    },
    {
        id: 6,
        title:"Doubt Clearing",
        icon: <BsFillStarFill />
    },
    {
        id: 7,
        title:"Practical Hands-On Exercises",
        icon: <BsFillStarFill />
    }
]