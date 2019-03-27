import React,{Component} from 'react';

export default class PersonEdit extends Component{

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "" ,
            id:this.props.person.id
        };
    }

    handleChange = (e) => {
            this.setState({[e.target.name]: e.target.value});   
    };

render(){
    return(
        <div>
        <h2>Person Edit Page</h2>
            <label htmlFor='firstName'>First Name:</label>
            <input type='text' id='firstName' onChange={this.handleChange} value={this.props.person.firstName} name='firstName' required={true}></input><br/><br/>
            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' id='lastName' onChange={this.handleChange} value={this.props.person.lastName} name='lastName' required={true}></input><br/><br/>
            <button name='saveButton' onClick={() => this.props.savePerson(this.state)}>Save</button>
        </div>
    );
}

}