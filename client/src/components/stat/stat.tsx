import React from 'react';

import { StatSubnav } from '../common/stat-subnav/stat-subnav';
import { SubNavRoutes } from '../../main/routes';

import s from './stat.module.css';

export const Stat = () => {
    return (
        <div className={s.statWrapper}>
            <StatSubnav />
            <div className={s.main}>
                <SubNavRoutes />
            </div>
        </div>
    );
};