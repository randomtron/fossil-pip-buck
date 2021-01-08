import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'; 

export const DataSubnav = () => {
    const [block, setBlock] = useState<String>("1");
    return (
        <div className="sub-nav">
            <NavLink 
                to="/data/characters" 
                className={(block == "1")?"sub-nav-block-bold":"sub-nav-block"} 
                onClick={() => setBlock("1")}><span>CHARACTERS</span></NavLink>
            <NavLink 
                to="/data/locations" 
                key="2"
                className={(block == "2")?"sub-nav-block-bold":"sub-nav-block"} 
                onClick={() => setBlock("2")}><span>LOCATIONS</span></NavLink>
        </div>
    );
};