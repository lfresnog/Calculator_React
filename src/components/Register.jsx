import React from 'react'
import './Styles.css'

const Register = (props) => {
    const {onIndex,onOperation} = props.onClick;
    return(
        <div className = "register">
            <div className="operations">
                <div className="reg" onClick={()=>onOperation(props.regs[0])}>{props.regs[0]}</div>
                <div className="reg" onClick={()=>onOperation(props.regs[1])}>{props.regs[1]}</div>
                <div className="reg" onClick={()=>onOperation(props.regs[2])}>{props.regs[2]}</div>
            </div>
            <div className = "upDown">
                <h2 className="arrow" onClick={()=>onIndex("up")}>↑</h2>
                <h2 className="arrow" onClick={()=>onIndex("down")}>↓</h2>
            </div> 
        </div>
    )
}

export {Register as default}