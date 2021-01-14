import React from 'react';

import {InvSubnav} from '../common/inv-subnav/inv-subnav';
import {SubNavRoutes} from '../../main/routes';

export const Inv = () => {
    return (
        <div className="mainWrapper">
            <InvSubnav/>
            <div>
                <SubNavRoutes/>
            </div>
        </div>
    )
};