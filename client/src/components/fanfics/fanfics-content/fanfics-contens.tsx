import React from 'react';
import s from './fanfics-content.module.css';

export const FanficsContent = (props: any) => {
    let currentFanfic = [];
    if(props.data.fanfics){
        currentFanfic = props.data.fanfics.find((e: any) => e.id === props.fanficID)
    }
    return (
        <div className={s.content}>
            <div>story: {currentFanfic.name}</div>
            <div>author: {currentFanfic.author}</div>
        </div>
    );      
};