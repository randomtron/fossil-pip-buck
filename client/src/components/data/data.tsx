import React from 'react';

import {DataSubnav} from '../common/data-subnav/data-subnav';
import {SubNavRoutes} from '../../main/routes';

import './data.scss';

export const Data = () => {
    return (
        <div className="dataWrapper">
            <DataSubnav/>
            <div className="main">
                <SubNavRoutes/>
            </div>
        </div>
    )
};