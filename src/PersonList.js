import React,{Component} from 'react';

class PersonList extends Component{

    constructor(props) {
        super(props);
        this.state = {
          firstName:"",
          lastName:""
        };
        
      }

    render(){
        let peopleInPL=this.props.people;
        return(
            <ul id='personsid' className="Persons">
                {peopleInPL.map((person)=> <li key={person.id} onClick={()=>this.props.updatePerson({firstName:person.firstName,lastName:person.lastName,id:person.id})}> {person.firstName} {person.lastName}</li>)}
            </ul>
        );
    }
}

export default PersonList;