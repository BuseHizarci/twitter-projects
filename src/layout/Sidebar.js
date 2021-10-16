import React from 'react'
import TwitterLogo from '../images/TwitterLogo.svg'
// import {
//     BookmarksIcon,
//     ExploreIcon,
//     HomeIcon,
//     ListsIcon,
//     MessagesIcon,
//     MoreIcon,
//     NotificationsIcon,
//     ProfileIcon, }
//     from "../icons/icon";

const Sidebar = () => {

    return (
    <div  className="flex flex-col justify-between w-72 bg-blue-200 px-2"> 
    <div>
    <img src={TwitterLogo} alt="Twitter Logo" className="w-9 h-9" />
    <nav className="mb-4">
        <ul>
            <li>Home</li>
            <li> Explore</li>
        </ul>
    </nav>
    <button className="bg-primary-base hover:bg-primary-dark  text-white rounded-full py-3 px-8 w-11/12 shadow-lg  transform transition-colors duratio-200">Tweet</button>
    </div>
    <div>Alttaraf</div>
    </div>
    );
}

export default Sidebar
