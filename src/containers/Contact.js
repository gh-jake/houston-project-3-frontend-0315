import React, { useState, useEffect } from 'react'
import Detail from '../components/Detail'
import DetailForm from '../containers/DetailForm'

const Contact = (props) => {
    console.log("props", props)
    const [contact, setContact] = useState({
        details: []
    })

    const [detailFormFlag, setDetailFormFlag] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:9292/contacts/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {setContact(data)})
    }, [props.match.params.id])

    const toggleDetailForm = () => {
        detailFormFlag ? setDetailFormFlag(false) : setDetailFormFlag(true)
    }
    
    const addDetail = (det) => {
        console.log("det", det)
        fetch(`http://localhost:9292/contacts/${contact.id}/details`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(det)
        })
        .then(res => res.json())
        .then(data => {
            setContact({
                ...contact,
                details: [...contact.details, data]
            })
        })
        toggleDetailForm()
    }

    const deleteDetail = (id) => {
        fetch(`http://localhost:9292/contacts/${contact.id}/details/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            const filteredDetails = contact.details.filter(d => d.id != id)
            setContact({
                ...contact,
                details: filteredDetails
            })
        })
    }

    const details = contact.details.map(det => <Detail key={det.id} detail={det} deleteDetail={deleteDetail}/>)
    
    return (
        <div>
            <h1>{contact.name}</h1>
            {details}
            <hr/>
            {detailFormFlag ? <DetailForm addDetail={addDetail} contact={contact}/> : <button onClick={toggleDetailForm}>Add Detail</button>}
        </div>
    )
}

export default Contact
