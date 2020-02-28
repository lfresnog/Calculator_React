import React from 'react';
import './Styles.css';

const Display = (props) => {
    const {onComplex} = props.onClick;
    return (
        <div className="display" onClick = {()=>onComplex()}>
            <h1 classNamme="Output">{props.output}</h1>
        </div> 
    )
}

export {Display as default}