import React from 'react';
import s from './fanfics-content.module.css';

type PropsType = {
    fanfics: Array<any>,
    fanficID: String
}
export const FanficsContent: React.FC<PropsType> = ({ fanfics, fanficID }) => {
    let currentFanfic = null;
    if (fanfics) {
        currentFanfic = fanfics.find((e: any) => e.id === fanficID)
    }
    return (
        <div className={s.content}>
            {!currentFanfic ?
                <div>Loading...</div> :
                <div>
                    <div>story: {currentFanfic.name}</div>
                    <div>author: {currentFanfic.author}</div>
                </div>
            }

        </div>
    );
};