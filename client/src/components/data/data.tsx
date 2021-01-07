import React from 'react';

import {DataSubnav} from '../common/data-subnav/data-subnav';
import {SubNavRoutes} from '../../main/routes';

import s from './data.module.css';

export const Data = () => {
    return (
        <div className={s.dataWrapper}>
            <DataSubnav/>
            <div className={s.main}>
                <SubNavRoutes/>
            </div>
        </div>
    )
};