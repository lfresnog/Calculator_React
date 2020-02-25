import React from 'react';

const Display = (props) => {
    return (
        <div>
            <h1>{props.output}</h1>
        </div> 
    )
}

export {Display as default}