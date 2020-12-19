import React, { useState } from 'react';

import {FanficList} from './fanfics-list/fanfics-list';
import {FanficsContent} from './fanfics-content/fanfics-contens';
import withHoc from './fanfics-hoc';

import s from './fanfics.module.css';


const Fanfics = (props: any) => {
    const [fanfic, setFanfic] = useState<string>("5fd9eeacf4d7ca5581d97161")
    console.log(fanfic);
    return (
        <div className={s.fanficsWrapper}>
            <FanficList fanficSet={(id: string) => setFanfic(id)} data={props.data}/>
            <FanficsContent />
        </div>
    );      
};

export default withHoc(Fanfics);