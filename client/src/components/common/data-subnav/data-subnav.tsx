import React from 'react';
import { NavLink } from 'react-router-dom'; 

export const DataSubnav = () => {
    return (
        <div className="sub-nav">
            <NavLink to="/data/characters" className="section"><span>CHARACTERS</span></NavLink>
            <NavLink to="/data/locations" className="section"><span>LOCATIONS</span></NavLink>
        </div>
    );
};