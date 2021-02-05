import React from 'react';

type PropsType = {
    perks: Array<any>,
    perkID: String,
    imgPath: string
};

export const PerksContent: React.FC<PropsType> = ({ perks, perkID, imgPath }) => {
    let currentPerk = null;
    if (perks) {
        currentPerk = perks.find((e: any) => e.id === perkID)
    }
    return (
        <div className="content">
            <img className="icon" src={imgPath} alt="Loading..."/>
            {!currentPerk ?
                <div>Loading...</div> :
                <div>
                    <div>{currentPerk.desc}</div>
                </div>
            }

        </div>
    );
};