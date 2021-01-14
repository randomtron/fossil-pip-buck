import React from 'react';

import { StatSubnav } from '../common/stat-subnav/stat-subnav';
import { SubNavRoutes } from '../../main/routes';

import './stat.scss';

export const Stat = () => {
    return (
        <div className="statWrapper">
            <StatSubnav />
            <div className="main">
                <SubNavRoutes />
            </div>
        </div>
    );
};