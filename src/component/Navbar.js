import React, { useState } from "react";
import Sidebar from "./Sidebar";

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

    // use states const  for sidebar show && set side bar
    const [showSidebar, setshowSidebar] = useState(false);

    // Arry for nav links && side bar
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/Settings",
            icon: faCog
        },
    ];

    // function for close side bar
    function closeSidebar(){
        setshowSidebar(false)
    }

    return (
        <>
            <div className="navbar container">
                <a href="#!" className="logo">
                    F<span>oo</span>dshub
                </a>
                <div className="nav-links">
                    {links.map((link) => (
                        <a href="#!" key={link.name}>
                            {link.name}
                        </a>
                    ))}


                </div>

                {/* function to show or not side bar */}
                <div
                    onClick={() => setshowSidebar(true)}
                    className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
                >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            {/* show side bar function */}
            { showSidebar && <Sidebar close={closeSidebar} links={links}/> }
            
        </>
    );
}
