import React from "react";
import { BsGrid, BsGear, BsChatDots, BsCardChecklist } from "react-icons/bs";

export const NavigationData = [
    {
        title: "Dashboard",
        icon: <BsGrid />,
        link: "/dashboard"
    },
    {
        title: "Course",
        icon: <BsCardChecklist />,
        link: "/course"
    },
    {
        title: "Chat",
        icon: <BsChatDots />,
        link: "/chat"
    },
    {
        title: "Settings",
        icon: <BsGear />,
        link: "/settings"
    }
]