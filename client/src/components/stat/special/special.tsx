import React from 'react';

import {useStatSpecial} from '../../../main/hooks/use-stat-special';
import {SpecialList} from './special-list/special-list';
import {SpecialContent} from './special-content/special-content';

export const Special = () => {
    const { specialID, setSpecial, specials } = useStatSpecial();
    return (
        <div className="main">
            <SpecialList 
                setSpecial={(id: string) => setSpecial(id)} 
                specials={specials}
                specialID={specialID}/>   
            <SpecialContent
                specialID={specialID} 
                specials={specials}/>
        </div>
    );
};