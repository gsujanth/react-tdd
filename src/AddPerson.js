import React,{Component} from 'react';

const uuid = require('uuid');

export default class AddPerson extends Component{

    constructor(props) {
        super(props);
        this.state = {
                firstName: "",
                lastName: "",
                id:uuid()  
        };
    }

    handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
    };

    render(){
        return(
            <div>
                <h2>Creating new person...</h2>
                <label htmlFor='firstName'>First Name:</label>
                <input type='text' id='firstName' onChange={this.handleChange} name='firstName'></input><br/><br/>
                <label htmlFor='lastName'>Last Name:</label>
                <input type='text' id='lastName' onChange={this.handleChange} name='lastName'></input><br/><br/>
                <button name='addButton' onClick={()=>this.props.addPerson(this.state)}>Add</button>
            </div>
        );
    }
}
