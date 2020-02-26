import React from 'react'
import './Styles.css'

const Register = (props) => {
    const {onIndex} = props.onClick;
    return(
        <div className = "register">
            <div className="operations">
                <div className="reg">{props.regs[0]}</div>
                <div className="reg">{props.regs[1]}</div>
                <div className="reg">{props.regs[2]}</div>
            </div>
            <div className = "upDown">
                <div className="arrow" onClick={()=>onIndex("up")}>↑</div>
                <div className="arrow" onClick={()=>onIndex("down")}>↓</div>
            </div> 
        </div>
    )
}

export {Register as default}