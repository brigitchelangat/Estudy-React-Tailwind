import React from 'react';
import ngeno from "../assets/images/ngeno.png";
import {NavigationData} from "./NavigationData";
import { MdLogout } from "react-icons/md";


const Navigation = () => {
    return (
        <div className='nav bg-brand p-3 rounded-l-2xl h-full
        place-items-center mt-5'>
            <h1 className='text-white text-center m-0 text-3xl font-bold'>Estudy</h1>
            <div className="student-img mt-3 mr-0.5 mb-0 ml-0 ">
                <img src={ngeno} alt="student" />
            </div>
            <h2 className='text-white text-center text-base font-bold my-1'>Ngeno Victor</h2>
            <p className='text-sm text-center text-white font-bold mb-1.5'>engenovic@gmail.com</p>
            <ul className="nav-list list-none w-full mt-5 pr-2 h-auto">
                    {
                        NavigationData.map((val,key) => {
                            return <li key={key} className='flex flex-row items-center gap-x-3 h-9 text-white pt-2 pr-1 pb-1 pl-1 rounded-lg
                            hover:cursor-pointer hover:bg-brand-light hover:text-brand' 
                            id={window.location.pathname === val.link? "active" : ""}
                            onClick={() => 
                            {window.location.pathname = val.link}}>
                                <div id='icon'>{val.icon}</div>
                                <div id='title' >{val.title}</div>
                            </li>
                        })
                    }
            </ul>
            <div className="sign-out w-full h-6 flex flex-row items-center gap-x-3 text-white mt-32 pt-2 pr-1 pb-1 pl-1 rounded-lg hover:cursor-pointer mb-10">
                <div id="icon"><MdLogout /></div>
                <div id="title">Logout</div>
            </div>
        </div>
    );
};

export default Navigation;
