import React from 'react'

const TimerLengthControl = (props) => {
    return (
        <div className="length-control">
            <div id={props.mode.toLowerCase()+"-label"} >{props.title}</div>
            <button
                className="btn-level"
                onClick={()=>props.onDecrement(props.mode)}
                value="-"
                id={props.mode.toLowerCase()+"-decrement"}
            >
                <i className="fa fa-arrow-down fa-2x" />
            </button>
            <div className="btn-level" id={props.mode.toLowerCase()+"-length"}>
                {props.length}
            </div>
            <button
                className="btn-level"
                onClick={()=>props.onIncrement(props.mode)}
                value="+"
                id={props.mode.toLowerCase()+"-increment"}
            >
                <i className="fa fa-arrow-up fa-2x" />
            </button>
        </div>
    )
}

export default TimerLengthControl
