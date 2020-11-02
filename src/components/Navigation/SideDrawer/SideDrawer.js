import React from 'react';

import Navigation from '../Navigation';
import './SideDrawer.css';
import Backdrop from '../Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Closed"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <div>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <Navigation closeDrawer={props.closed} />
                </nav>
            </div>
        </div>

    );
};

export default sideDrawer;