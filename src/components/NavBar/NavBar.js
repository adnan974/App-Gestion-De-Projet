import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent ,SidebarFooter} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const NavBar = () => {

    return (
        <ProSidebar>
            <SidebarHeader>
                MENU

            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem >Tableau de Bord</MenuItem>
                    
                    <MenuItem> Projet </MenuItem>
                    <MenuItem> Tâches </MenuItem>
                </Menu>

            </SidebarContent>
            <SidebarFooter>
                Footer

            </SidebarFooter>

        </ProSidebar>
    )

}

export default NavBar;