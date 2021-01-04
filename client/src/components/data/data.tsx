import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './data.module.css';

export const Data = () => {
    return (
        <div className={s.dataWrapper}>
            <div className="sub-nav">
                <NavLink to="/data/status" className="section"><span>STATUS</span></NavLink>
                <NavLink to="/data/special" className="section"><span>SPECIAL</span></NavLink>
            </div>
            <div className={s.main}>
                main
            </div>
        </div>
    )
};