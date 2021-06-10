import React from 'react'

const Detail = (props) => {
    const handleClick = () => {
        props.deleteDetail(props.detail.id)
    }
    
    return (
        <div>
            <h3 className="title">{props.detail.label}: {props.detail.info}</h3>
            <button className="delete-button" onClick={handleClick}>X</button>
            <br/><br/>
        </div>
    )
}

export default Detail