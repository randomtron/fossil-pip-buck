import React from 'react';
import s from './fanfics.module.css';
import withHoc from './fanfics-hoc';

const List = (props: any) => {
    console.log(props.data)
    return (
        <div className={s.fanfics}>
            <div>point 1</div>
            <div>point 2</div>
        </div>
    );      
};

export default withHoc(List);