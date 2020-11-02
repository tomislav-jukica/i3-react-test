import React from 'react';

import './Photo.css'

const photo = (props) => {
    return (
        <div className="Photo">
            <img src={props.link} />
        </div>
    )
};

export default photo;