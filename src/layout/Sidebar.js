import React , {useState} from 'react'
import SideLink from "../components/SideLink";
import TwitterLogo from '../images/TwitterLogo.svg'
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
    const sideLinks = [
        {
          name: "Home",
          icon: HomeIcon,
        },
        {
          name: "Explore",
          icon: ExploreIcon,
        },
        {
          name: "Notifications",
          icon: NotificationsIcon,
        },
        {
          name: "Messages",
          icon: MessagesIcon,
        },
        {
          name: "Bookmarks",
          icon: BookmarksIcon,
        },
        {
          name: "Lists",
          icon: ListsIcon,
        },
        {
          name: "Profile",
          icon: ProfileIcon,
        },
        {
          name: "More",
          icon: MoreIcon,
        },
      ];


      const Sidebar = () => {
        const [active, setActive] = useState("Home");
      
        const handleMenuItemClick = (name) => {
          setActive(name);
        };

    return (
    <div  className="flex flex-col justify-between w-72 bg-white px-2"> 
    <div>
    <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-light transform transition-colors duration-200">
          <img src={TwitterLogo} alt="Twitter Logo" className="w-9 h-9" />
        </div>
    <nav className="mb-4">
    <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
    </nav>
    <button className="bg-primary-base hover:bg-primary-dark  text-white rounded-full py-3 px-8 w-11/12 shadow-lg  transform transition-colors duratio-200">Tweet</button>
    </div>
    <div>Alttaraf</div>
    </div>
    );
}

export default Sidebar
