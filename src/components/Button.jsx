import React from 'react';

const Button = (props) => {
    const onDisplay = props.onClick;
    return (
        <div className="button" onClick = {() => onDisplay(`${props.name}`)}><h1>{props.name}</h1></div>
    )
}

export {Button as default}