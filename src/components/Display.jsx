import React from 'react';
import './Styles.css';

const Display = (props) => {
    return (
        <div className="Display">
            <h1 classNamme="Output">{props.output}</h1>
        </div> 
    )
}

export {Display as default}