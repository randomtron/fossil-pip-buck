import React from 'react';
import { NavLink } from 'react-router-dom'; 

export const InvSubnav = () => {
    return (
        <div className="sub-nav">
            <NavLink 
                exact to="/inv" 
                className="sub-nav-block"
                activeClassName="sub-nav-block-bold"
                ><span>WEAPONS</span></NavLink>
            <NavLink 
                to="/inv/apparel" 
                className="sub-nav-block"
                activeClassName="sub-nav-block-bold"
                ><span>APPAREL</span></NavLink>
        </div>
    );
};
