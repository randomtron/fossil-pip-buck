import React from 'react';

type PropsType = {
    specials: Array<any>,
    specialID: String
};

export const SpecialContent: React.FC<PropsType> = ({ specials, specialID }) => {
    let currentSpecial = null;
    if (specials) {
        currentSpecial = specials.find((e: any) => e.id === specialID)
    }
    return (
        <div className="content">
            {!currentSpecial ?
                <div>Loading...</div> :
                <div>
                    <div>{currentSpecial.desc}</div>
                </div>
            }

        </div>
    );
};