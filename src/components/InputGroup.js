import React from 'react'

const InputGroup = (props) => {
    return (
        <div className={"input-group " + props.className}>
            <label>{props.label}</label>
            <input placeholder={props.placeholder} value={props.value}/>
        </div>
    )
}

export default InputGroup