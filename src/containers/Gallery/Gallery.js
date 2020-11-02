import React, { Component } from 'react';


import Photos from './Photos/Photos';
import Toolbar from '../../components/Toolbar/Toolbar';
import { Route } from 'react-router-dom';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import About from '../About/About';

import './Gallery.css';

class Gallery extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        console.log(this.state.showSideDrawer)
        return(
            <div className="Gallery">
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <Route path="/" exact component={Photos}/>   
                <Route path="/about" exact component={About}/>   
            </div>
            
        );
        
    }
}

export default Gallery;