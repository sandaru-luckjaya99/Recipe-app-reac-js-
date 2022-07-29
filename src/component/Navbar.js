import React, { useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";

export default function Navbar() {
  const [showSidebar, setshowSidebar] = useState(false);

  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "Recipes",
      path: "/recipes",
    },
    {
      name: "Settings",
      path: "/Settings",
    },
  ];

  // function addCount(){
  //     setcount(Count=>Count + 1)
  // }
  // function deCount(){
  //     setcount(Count=>Count - 1)
  // }

  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          F<span>oo</span>dshub
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a href="#!" key={link.name}>
              {link.key}
            </a>
          ))}

          {/* <a href="#!">Home</a>
          <a href="#!">Reciepies</a>
          <a href="#!">Settings</a> */}
        </div>

        {/* function to show or not side bar */}
        <div
          onClick={() => setshowSidebar(!showSidebar)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <Sidebar links={links} />
    </>
  );
}
