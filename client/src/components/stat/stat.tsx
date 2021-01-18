import React from 'react';

import { StatSubnav } from '../common/stat-subnav/stat-subnav';
import { SubNavRoutes } from '../../main/routes';

export const Stat = () => {
    return (
        <div className="mainWrapper">
            <StatSubnav />
            <div>
                <SubNavRoutes />
            </div>
        </div>
    );
};