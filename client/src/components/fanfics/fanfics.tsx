import React from 'react';

import FanficList from './fanfics-list/fanfics-list';
import {FanficsContent} from './fanfics-content/fanfics-contens';

import s from './fanfics.module.css';


export const Fanfics = () => {
    return (
        <div className={s.fanficsWrapper}>
            <FanficList />
            <FanficsContent />
        </div>
    );      
};