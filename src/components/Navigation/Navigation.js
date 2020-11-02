import React from 'react';

import { NavLink } from 'react-router-dom';
import './Navigation.css'



const navigationItem = (props) => (
    <li className="NavigationItem">
        <NavLink to="/" exact onClick={props.closeDrawer}>Gallery</NavLink>
        <NavLink to="/about" onClick={props.closeDrawer}>About</NavLink>

    </li>
);

export default navigationItem;