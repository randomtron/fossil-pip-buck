import React from 'react';

import { useFanficsState } from '../../../main/hooks/use-fanfics-state';

import { FanficList } from './fanfics-list/fanfics-list';
import { FanficsContent } from './fanfics-content/fanfics-contens';

import s from './fanfics.module.css';

const Fanfics = () => {
    const { fanficID, setFanfic, fanfics } = useFanficsState();
    return (
        <div className={s.fanficsWrapper}>
            <FanficList fanficSet={(id: string) => setFanfic(id)} fanfics={fanfics} />
            <FanficsContent fanficID={fanficID} fanfics={fanfics} />
        </div>
    );
};

export default Fanfics;