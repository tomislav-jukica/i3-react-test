import React from 'react';

import './Toolbar.css';

import Navigation from '../Navigation/Navigation';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>      
        <nav className="DesktopOnly">
            <Navigation/>
        </nav>
    </header>
);

export default toolbar;