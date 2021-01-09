import React from 'react';
import {NavLink} from 'react-router-dom';

import './header.css';

export const Header = () => {
    return (
        <header className="header">
            <NavLink 
                to="/stats" 
                className="headerBlock"
                activeClassName="headerBlockActive"><span>STATS</span></NavLink> 
            <NavLink 
                to="/inv" 
                className="headerBlock"
                activeClassName="headerBlockActive"><span>INV</span></NavLink>
            <NavLink 
                to="/data" 
                className="headerBlock"
                activeClassName="headerBlockActive"><span>DATA</span></NavLink>
            <NavLink 
                to="/map" 
                className="headerBlock"
                activeClassName="headerBlockActive"><span>MAP</span></NavLink>
            <NavLink 
                to="/radio" 
                className="headerBlock"
                activeClassName="headerBlockActive"><span>RADIO</span></NavLink>
        </header>
    );      
};