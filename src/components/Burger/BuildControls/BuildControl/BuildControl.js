import React from 'react';
import types from './BuildControl.module.css'
const buildControl = (props) =>{
    return(
    <div className={types.BuildControl}>
        <div className={types.Label}>{props.label}</div>
        <button className={types.Less}>Less</button>
        <button className={types.More}>More</button>
    </div>)
}

export default buildControl;