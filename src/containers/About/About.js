import React, { Component } from 'react';
import Photo from '../../components/Photo/Photo';
import './About.css'
import Fade from 'react-reveal/Fade';

class About extends Component {
    render() {
        return (
            <div className="About">
                <span className="right">
                        <Photo link="https://via.placeholder.com/400"></Photo>
                </span>
                <div className="left">
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.</p>


                    <Fade up>
                        <Photo link="https://via.placeholder.com/200"></Photo>
                        <Photo link="https://via.placeholder.com/200"></Photo>
                        <Photo link="https://via.placeholder.com/200"></Photo>
                    </Fade>

                </div>
                


            </div>
        );
    };
}

export default About;