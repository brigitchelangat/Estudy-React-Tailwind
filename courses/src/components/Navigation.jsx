import React from 'react';
import ngeno from "../assets/images/ngeno.png";
import {NavigationData} from "./NavigationData";
import { MdLogout } from "react-icons/md";


const Navigation = () => {
    return (
        <div className='nav'>
            <h1>Estudy</h1>
            <div className="student-img">
                <img src={ngeno} alt="student" />
            </div>
            <h2>Ngeno Victor</h2>
            <p>engenovic@gmail.com</p>
            <ul className="nav-list">
                    {
                        NavigationData.map((val,key) => {
                            return <li key={key} className='row' 
                            id={window.location.pathname === val.link? "active" : ""}
                            onClick={() => 
                            {window.location.pathname = val.link}}>
                                <div id='icon'>{val.icon}</div>
                                <div id='title'>{val.title}</div>
                            </li>
                        })
                    }
            </ul>
            <div className="sign-out">
                <div id="icon"><MdLogout /></div>
                <div id="title">Logout</div>
            </div>
        </div>
    );
};

export default Navigation;
