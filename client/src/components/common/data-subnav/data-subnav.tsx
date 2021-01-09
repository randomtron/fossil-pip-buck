import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'; 

export const DataSubnav = () => {
    return (
        <div className="sub-nav">
            <NavLink 
                exact to="/data" 
                className="sub-nav-block"
                activeClassName="sub-nav-block-bold"
                ><span>CHARACTERS</span></NavLink>
            <NavLink 
                to="/data/locations" 
                className="sub-nav-block"
                activeClassName="sub-nav-block-bold"
                ><span>LOCATIONS</span></NavLink>
        </div>
    );
};