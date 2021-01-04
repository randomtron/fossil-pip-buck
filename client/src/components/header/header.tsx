import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to="/stats" className="section"><span>STATS</span></NavLink> 
            <NavLink to="/inv" className="section"><span>INV</span></NavLink>
            <NavLink to="/data" className="section"><span>DATA</span></NavLink>
            <NavLink to="/map" className="section"><span>MAP</span></NavLink>
            <NavLink to="/radio" className="section"><span>RADIO</span></NavLink>
        </header>
    );      
};