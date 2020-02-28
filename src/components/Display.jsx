import React from 'react';
import './Styles.css';

const Display = (props) => {
    const {onComplex} = props.onClick;
    return (
        <div className="display" onClick = {()=>onComplex()}>
            <h1 className={(props.result>=0 && props.new && props.output.length<16)?`output-green`:
            (props.result>=0&& props.new && props.output.length>=16)?`output-green-h3`:
            (props.result<0&&props.new && props.output.length<16)?`output-red`:
            (props.result<0&&props.new && props.output.length>=16)?`output-red-h3`:
            (!props.new && props.output.length<16)?`output`:`output-h3`} >{props.output}</h1>
        </div> 
    )
}

export {Display as default}