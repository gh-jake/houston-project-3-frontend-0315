import React from 'react'
import { Link } from 'react-router-dom'

const ContactLink = (props) => {
    return (
        <div>
            <Link to={`/contacts/${props.contact.id}`}>
                <h2 className="title">{props.contact.name}</h2>
            </Link>
            <button className="delete-button" onClick={() => props.deleteContact(props.contact.id)}>X</button>
            <hr/>
        </div>
    )
}

export default ContactLink
