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
    <img src={TwitterLogo} alt="Twitter Logo" className="w-9 h-9" />
    <nav>
        <ul>
            <li>Home</li>
            <li> Explore</li>
        </ul>
    </nav>
    </div>
    );
}

export default Sidebar
