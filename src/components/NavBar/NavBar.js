import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavbarData } from "./NavBarData";
import "./NavBar.css";


{/*  Tuto navbar :
    Rq: c'est facile. Le plus dur est le css :(
    
    - showSideBar : change le nom de la classe de la navbar. Cela permet d'affichet et de cacher la navbar grâce au css
                    appliqué sur la classe correspondante.
    - NavBarData  : Regroupe toutes les infos de la navbar. Ensuite grâce à une boucle on créer des LI et on lui met les 
                    Datas
    - FaIcons     : Librairie sympa (react-icons) qui permet de manipuler des icones en tant que composant
    

    */}
const NavBar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>

            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div >
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </Link>
                    </li>
                    {NavbarData.map((item, index) => {
                        return (
                            <li key={index} className={item._className}>
                                <Link to={item.path} onClick={showSidebar} >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </nav>
        </>

    )

}

export default NavBar;