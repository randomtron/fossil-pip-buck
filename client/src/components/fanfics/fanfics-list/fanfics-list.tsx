import React from 'react';
import s from './fanfics-list.module.css';


export const FanficList = (props: any) => {
    let fanfics = null
   if (props.data.fanfics) {
        fanfics = props.data.fanfics.map((e: any) => 
        <li key={e.id} onClick={() => props.fanficSet(e.id)}>
            <span>{e.name}, </span>
            <span>author: {e.author}</span>
        </li>)
    }

    return (
        <div className={s.list}>
            <ul>{fanfics}</ul>
        </div>
    );
};

export default FanficList;