import React,{Component} from 'react';

export default class PersonEdit extends Component{

    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.person.firstName,
            lastName: this.props.person.lastName ,
            id:this.props.person.id
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

render(){
    return(
        <div>
        <h2>Person Edit Page</h2>
        <form onSubmit={() => this.props.savePerson(this.state)}>
            <label htmlFor='firstName'>First Name:</label>
            <input type='text' id='firstName' onChange={this.handleChange} value={this.state.firstName} name='firstName' required></input><br/><br/>
            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' id='lastName' onChange={this.handleChange} value={this.state.lastName} name='lastName' required></input><br/><br/>
            <button type="submit" name='saveButton'>Save</button> &nbsp; 
            <button type="button" name='deleteButton' onClick={()=>{this.props.deletePerson(this.state)}}>Delete</button> &nbsp;
            <button type="button" name='cancelButton' onClick={()=>{this.props.cancel()}}>Cancel</button>
        </form>
        
        </div>
    );
}

}