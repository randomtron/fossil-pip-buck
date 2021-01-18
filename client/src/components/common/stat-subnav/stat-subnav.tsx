import React from 'react';
import { NavLink } from 'react-router-dom'; 

export const StatSubnav = () => {
    return (
        <div className="sub-nav">
            <NavLink 
                exact to="/stat" 
                className="sub-nav-block"
                activeClassName="sub-nav-block-bold"
                ><span>STATUS</span></NavLink>
            <NavLink 
                to="/stat/special" 
                className="sub-nav-block"
                activeClassName="sub-nav-block-bold"
                ><span>SPECIAL</span></NavLink>
            <NavLink 
                to="/stat/perks" 
                className="sub-nav-block"
                activeClassName="sub-nav-block-bold"
                ><span>PERKS</span></NavLink>
        </div>
    );
};