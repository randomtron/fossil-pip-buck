import React from 'react';

import {DataSubnav} from '../common/data-subnav/data-subnav';
import {SubNavRoutes} from '../../main/routes';

export const Data = () => {
    return (
        <div className="mainWrapper">
            <DataSubnav/>
            <div>
                <SubNavRoutes/>
            </div>
        </div>
    )
};