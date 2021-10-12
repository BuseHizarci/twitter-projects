import React from 'react'
import {
    BookmarksIcon,
    ExploreIcon,
    HomeIcon,
    ListsIcon,
    MessagesIcon,
    MoreIcon,
    NotificationsIcon,
    ProfileIcon, }
    from "../icons/icon";

const Sidebar = () => {
    return (
    <div  className="w-72 bg-blue-200"> 
    <h1> SideBarr </h1>
    <HomeIcon/>
    <ExploreIcon/>
    <NotificationsIcon/>
    <MessagesIcon/>
    <BookmarksIcon/>
    <ListsIcon/>
    <ProfileIcon/>
    <MoreIcon/>
    </div>
        
    );
}

export default Sidebar