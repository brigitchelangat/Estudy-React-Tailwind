import React from "react";
import { BsGrid, BsCardChecklist, BsPeopleFill, BsListUl, 
    BsFillStarFill, BsPersonWorkspace, BsBookmarkDash,BsFileText } from "react-icons/bs";

export const NavigationData = [
    {
        title: "Dashboard",
        icon: <BsGrid />,
        link: "/dashboard"
    },
    {
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
        title: "Webinars",
        icon: <BsPersonWorkspace />,
        link: "/webinars"
    },
    {
        title: "Blogs",
        icon: <BsFileText />,
        link: "/blogs"
    }
]

export const CourseInfo = [
    {
        title:"learners",
        no: "45",
        icon: <BsPeopleFill />
    },
    {
        title:"lessons",
        no: "15",
        icon: <BsListUl />
    },
    {
        title:"rating",
        no:"4.5",
        icon: <BsFillStarFill />
    }
]