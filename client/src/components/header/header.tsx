import React from 'react';
import {NavLink} from 'react-router-dom';

import './header.scss';

export const Header = () => {
    return (
        <header className="header">
            <NavLink 
                to="/noteform" 
                className="headerBlock"
                activeClassName="headerBlockActive"><span>Форма записи</span></NavLink> 
            <NavLink 
                to="/whitelist" 
                className="headerBlock"
                activeClassName="headerBlockActive"><span>Белый лист</span></NavLink>
        </header>
    );      
};