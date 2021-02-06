import React from 'react';

type PropsType = {
    specials: Array<any>,
    specialID: String,
    imgPath: string,
};

export const SpecialContent: React.FC<PropsType> = ({ specials, specialID, imgPath }) => {
    let currentSpecial = null;
    if (specials) {
        currentSpecial = specials.find((e: any) => e.id === specialID)
    }
    return (
        <div className="content">
            <img className="icon" src={imgPath} alt="Loading..."/>
            {!currentSpecial ?
                <div>Loading...</div> :
                <div>
                    <div>{currentSpecial.desc}</div>
                </div>
            }

        </div>
    );
};