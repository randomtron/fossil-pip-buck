import React from 'react';

import {InvSubnav} from '../common/inv-subnav/inv-subnav';
import {SubNavRoutes} from '../../main/routes';

export const Inv = () => {
    return (
        <div className="dataWrapper">
            <InvSubnav/>
            <div className="main">
                <SubNavRoutes/>
            </div>
        </div>
    )
};