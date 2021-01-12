import React from 'react';

type PropsType = {
    perks: Array<any>,
    setPerk: (id: string) => void,
    perkID: String,
}

export const PerksList: React.FC<PropsType> = ({ perks, setPerk, perkID }) => {
    let currentPerks = null
    if (perks) {
        currentPerks = perks.map((e: any) =>
            <div
                className={(e.id === perkID) ? "sectionactive" : "section"}
                key={e.id}
                onClick={() => setPerk(e.id)}>
                    <span>{e.name}</span>
            </div>)
    }

    return (
        <div className="list">
            {currentPerks}
        </div>
    );
};
