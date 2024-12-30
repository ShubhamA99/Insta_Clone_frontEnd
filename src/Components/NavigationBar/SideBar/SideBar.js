import React, { useEffect, useState } from "react";
import "./SideBar.css";
import { RiHome3Line } from "react-icons/ri";
import { FaMagnifyingGlass, FaRegCompass } from "react-icons/fa6";
import { SiYoutubeshorts } from "react-icons/si";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { NavLink } from "react-router";

import { menus, menusList } from "./SideBarService.js";
function NavBar() {
  const iconMap = {
    RiHome3Line: RiHome3Line, // Add other icons here as needed
    FaRegCompass: FaRegCompass,
    SiYoutubeshorts: SiYoutubeshorts,
    BiSolidMessageSquareDetail: BiSolidMessageSquareDetail,
    FaMagnifyingGlass: FaMagnifyingGlass,
  };

  const [menusList, setMenuList] = useState([]);

  useEffect(() => {
    const fetchedMenus = menus(); // Call the function to get menu items
    setMenuList(fetchedMenus); // Set the fetched menus in state
  }, []);

  return (
    <>
      <div className="sidebar d-flex flex-column">
        {/* Logo */}
        <div className="logo-wrapper px-4 py-3">
          <img
            src="/images/Instagram-Word-Logo.png"
            alt="Logo"
            className="w-50"
          />
        </div>

        {/* Main Menu */}
        <ul className="nav flex-column flex-grow-1 px-2">
          {menusList.map((menu) => {
            const IconComponent = iconMap[menu.fontIconName]; // Get the icon component
            return (
              <li className="nav-item" key={menu.name}>
                <NavLink to={menu.to} className="nav-link">
                  {IconComponent && (
                    <IconComponent className="me-3" size={30} />
                  )}
                  <span>{menu.name}</span>
                </NavLink>
              </li>
            );
          })}
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
              <img
                className="icon rounded-circle"
                src="https://avatars.githubusercontent.com/u/1743919?v=4"
                alt="Profile icon"
                width="24"
              />
              Profile
            </NavLink>
          </li>
        </ul>

        {/* Bottom Menu */}
        <ul className="nav flex-column px-2">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="bi bi-gear icon"></i> {/* Bootstrap Icon */}
              Settings
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
