import React from "react";
import "./Header.css";
import { navItems } from "../../data/data";

const Header = (props) => {
  return (
    <div id="header" className="header shadow">
      <div className="container">
        <ul className="navItems">
          {navItems.map((data, key) => {
            return (
              <li className="navItem" key={key}>
                <a className="navLink" href={`#${data.id}`}>
                  {data.title}
                </a>
              </li>
            );
          })}
          <div className="verticalLine" />
          <li className="navItem">
            <button className="themeButton" onClick={props.toggleTheme}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </button>
          </li>
          <li className="hamburger">
            <button className="hamburgerButton" onClick={props.toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
