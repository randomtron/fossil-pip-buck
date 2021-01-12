import React from 'react';

type PropsType = {
    perks: Array<any>,
    perkID: String
};

export const PerksContent: React.FC<PropsType> = ({ perks, perkID }) => {
    let currentPerk = null;
    if (perks) {
        currentPerk = perks.find((e: any) => e.id === perkID)
    }
    return (
        <div className="content">
            {!currentPerk ?
                <div>Loading...</div> :
                <div>
                    <div>{currentPerk.desc}</div>
                </div>
            }

        </div>
    );
};