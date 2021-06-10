import React, { Component } from 'react'

class ContactForm extends Component {
    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addContact(this.state)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default ContactForm
