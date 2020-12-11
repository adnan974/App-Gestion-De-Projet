import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from "react-icons/bs";

import React from "react";


export const NavbarData = [

    {
        title: "Accueil",
        _className: "nav-text",
        icon: <FaIcons.FaCartPlus />,
        path: "/home",
    },
    {
        title: "Projets",
        _className: "nav-text",
        icon: <IoIcons.IoMdPeople />,
        path: "/project",
    },
    {
        title: "Tâches",
        _className: "nav-text",
        icon: <FaIcons.FaEnvelopeOpenText />,
        path: "/task",
    },
    {
        title: "Utilisateurs",
        _className: "nav-text",
        icon: <BsIcons.BsPerson />,
        path: "/user",
    }

]
