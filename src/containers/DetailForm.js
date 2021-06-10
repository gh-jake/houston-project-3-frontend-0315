import React, {Component} from 'react'

class DetailForm extends Component {
    state = {
        info: '',
        label: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDetail(this.state)
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select name="label" onChange={this.handleChange}>
                        <option defaultValue="select">Select</option>
                        <option name="email">Email</option>
                        <option name="phone-number">Phone Number</option>
                        <option name="address">Address</option>
                    </select>
                    <input type="text" name="info" onChange={this.handleChange}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default DetailForm