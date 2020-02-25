import React from 'react';
import Button from './Button'
import './Styles.css'

const Body  = (props) => {
   
    const {onDisplay,onEqual} = props.onClick;

    return (
        <div className="basic">
            <div className="b1">
                <Button name="DEL" onClick = {onDisplay}/> 
                <Button name="T" onClick = {onDisplay}/>
                <Button name="/" onClick = {onDisplay}/>
                <Button name="*" onClick = {onDisplay}/>
                <Button name="7" onClick = {onDisplay}/>
                <Button name="8" onClick = {onDisplay}/>
                <Button name="9" onClick = {onDisplay}/>
                <Button name="*" onClick = {onDisplay}/>
                <Button name="4" onClick = {onDisplay}/>
                <Button name="5" onClick = {onDisplay}/>
                <Button name="6" onClick = {onDisplay}/>
                <Button name="+" onClick = {onDisplay}/>
            </div>
            <div className="b2">
                <div className="b2a">
                    <Button name="1" onClick = {onDisplay}/>
                    <Button name="2" onClick = {onDisplay}/>
                    <Button name="3" onClick = {onDisplay}/>
                </div>
                <div className="b2b">
                    <Button name="0" onClick = {onDisplay}/>
                    <Button name="," onClick = {onDisplay}/> 
                </div>
                <div className="b2c">
                    <Button name="=" onClick = {()=>onEqual()}/>
                </div>
            </div>
        </div>
    )
};

export {Body as default}