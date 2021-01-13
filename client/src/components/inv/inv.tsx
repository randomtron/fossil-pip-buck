import React from 'react';

import {InvSubnav} from '../common/inv-subnav/inv-subnav';
import {SubNavRoutes} from '../../main/routes';

import s from './data.module.css';

export const Inv = () => {
    return (
        <div className={s.dataWrapper}>
            <InvSubnav/>
            <div className={s.main}>
                <SubNavRoutes/>
            </div>
        </div>
    )
};