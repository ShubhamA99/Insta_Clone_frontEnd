import React from "react";

const NavItem = ({ label, href, Icon }) => (
  <li>
    <a href={href} className="nav-link">
      <span className="icon">
        <Icon /> {/* Render the icon */}
      </span>
      {label}
    </a>
  </li>
);

export default NavItem;
