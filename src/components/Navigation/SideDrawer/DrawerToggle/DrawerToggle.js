import React from 'react';

import './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className="DrawerToggle" onClick={props.clicked}>
        <i class="arrow"></i>IZBORNIK
    </div>
    
);

export default drawerToggle;