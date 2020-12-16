import React from 'react';
import s from './fanfics.module.css';
import withHoc from './fanfics-hoc';

const List = (props: any) => {
    const fanfics = props.data.fanfics.map((e: any) => <li>
        <span>{e.name}, </span>
        <span>author: {e.author}</span>
    </li>)
    return (
        <div className={s.fanfics}>
            <ul>{fanfics}</ul>          
        </div>
    );      
};

export default withHoc(List);