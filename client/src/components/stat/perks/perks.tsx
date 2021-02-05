import React from 'react';

import {useStatPerks} from '../../../main/hooks/use-stat-perks';
import {PerksList} from './perks-list/perks-list';
import {PerksContent} from './perks-content/perks-content';

export const Perks = () => {
    const { perkID, setPerk, perks, imgPath } = useStatPerks();
    return (
        <div className="main">
            <PerksList 
                setPerk={(id: string) => setPerk(id)} 
                perks={perks}
                perkID={perkID}/>   
            <PerksContent
                perkID={perkID} 
                perks={perks}
                imgPath={imgPath}/>
        </div>
    );
};