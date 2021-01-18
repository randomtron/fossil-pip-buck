import React from 'react';

import './special-list.scss';

type PropsType = {
    specials: Array<any>,
    setSpecial: (id: string) => void,
    specialID: String,
}

export const SpecialList: React.FC<PropsType> = ({ specials, setSpecial, specialID }) => {
    let currentSpecials = null
    if (specials) {
        currentSpecials = specials.map((e: any) =>
            <div
                className={(e.id === specialID) ? "sectionactive" : "section"}
                key={e.id}
                onClick={() => setSpecial(e.id)}>
                <div className="specials"> 
                    <span>{e.name}</span>
                    <span>{e.value}</span>
                </div>
            </div>)
    }

    return (
        <div className="list">
            {currentSpecials}
        </div>
    );
};
