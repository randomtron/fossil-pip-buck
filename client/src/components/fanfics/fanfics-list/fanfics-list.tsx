import React from 'react';
import s from './fanfics-list.module.css';

type PropsType = {
    fanfics: Array<any>,
    fanficSet: (id: string) => void
}

export const FanficList: React.FC<PropsType> = ({ fanfics, fanficSet }) => {
    let currentFanfics = null
    if (fanfics) {
        currentFanfics = fanfics.map((e: any) =>
            <li key={e.id} onClick={() => fanficSet(e.id)}>
                <span>{e.name} </span>
            </li>)
    }

    return (
        <div className={s.list}>
            <ul>{currentFanfics}</ul>
        </div>
    );
};

export default FanficList;