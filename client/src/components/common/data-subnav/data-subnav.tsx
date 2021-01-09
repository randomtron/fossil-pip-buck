import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'; 

export const DataSubnav = () => {
    const curUrl = window.location.pathname;
    return (
        <div className="sub-nav">
            <NavLink 
                to="/data/characters" 
                className={((curUrl == "/data/characters") || (curUrl == "/data"))?
                    "sub-nav-block-bold":"sub-nav-block"} 
                ><span>CHARACTERS</span></NavLink>
            <NavLink 
                to="/data/locations" 
                key="2"
                className={(curUrl == "/data/locations")?
                    "sub-nav-block-bold":"sub-nav-block"} 
                ><span>LOCATIONS</span></NavLink>
        </div>
    );
};