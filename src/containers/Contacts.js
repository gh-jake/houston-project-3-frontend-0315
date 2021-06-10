import React, {useState, useEffect} from 'react'
import ContactLink from '../components/ContactLink'
import ContactForm from './ContactForm'

const Contacts = () => {
    const [contacts, setContacts] = useState([])
    const [contactFormFlag, setContactFormFlag] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/contacts')
        .then(res => res.json())
        .then(data => {setContacts(data)})
    }, [])

    const toggleContactForm = () => {
        contactFormFlag ? setContactFormFlag(false) : setContactFormFlag(true)
    }

    const addContact = (con) => {
        fetch('http://localhost:9292/contacts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(con)
        })
        .then(res => res.json())
        .then(data => {
            setContacts([...contacts, data])
        })
        toggleContactForm()
    }

    const deleteContact = (id) => {
        fetch(`http://localhost:9292/contacts/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            const filteredContacts = contacts.filter(c => c.id != id)
            setContacts(filteredContacts)
        })
    }

    const contactList = contacts.map(con => <ContactLink key={con.id} contact={con} deleteContact={deleteContact}/>)

    return (
        <div>
            <h1>Contacts</h1>
            <hr/>
            <ul>
                {contactList}
            </ul>
            <br/><br/>
            {contactFormFlag ? <ContactForm addContact={addContact}/> : <button onClick={toggleContactForm}>+</button>}
        </div>
    )
}

export default Contacts
