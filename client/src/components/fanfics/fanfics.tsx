import React, { useState } from 'react';

import {FanficList} from './fanfics-list/fanfics-list';
import {FanficsContent} from './fanfics-content/fanfics-contens';
import withHoc from './fanfics-hoc';

import s from './fanfics.module.css';


const Fanfics = (props: any) => {
    const [fanficID, setFanfic] = useState<string>("5fd9eeacf4d7ca5581d97161")
    console.log(props.data);
    return (
        <div className={s.fanficsWrapper}>
            <FanficList fanficSet={(id: string) => setFanfic(id)} data={props.data}/>
            <FanficsContent fanficID={fanficID} data={props.data}/>
        </div>
    );      
};

export default withHoc(Fanfics);