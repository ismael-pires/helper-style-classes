import React from 'react'

const Card = (props) => {

    return (
        <div className={"card " + props.className}>
            <div className="card-header">
                <label>{props.title}</label>
            </div>
            <div className="card-content">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual mockups.
            </div>
            <div className="card-footer">
                <button>Detalhes</button>
            </div>
        </div>
    )
}

export default Card