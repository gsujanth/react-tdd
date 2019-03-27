import React, { Component } from 'react';
import PersonList from './PersonList';
import AddPerson from './AddPerson';
import PersonEdit from './PersonEdit';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [
        { firstName: 'Alan', lastName: 'Turing' ,id:'hgeufh'},
        { firstName: 'Alanzo', lastName: 'Church', id:'fgueg' },
        { firstName: 'Grace', lastName: 'Hopper', id:'3t6' }
      ],
      clicked:false,
      updatePersonClicked:false,
      savePersonClicked:false,
      toUpdatePerson:{}
    };
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick=()=>{
    this.setState({
      clicked:true
    });
  }

  addPerson = (person) => {
		const people = [...this.state.people];
		people.push(person);
    this.setState({ people, clicked:false });
  };

  updatePerson =(person)=>{
      this.setState({updatePersonClicked:true,toUpdatePerson:person});
  };

  savePerson =(person)=>{
    let tmpPeople = [...this.state.people];
    let tmpP= tmpPeople.filter((person1)=>person1.id !== person.id);
    tmpP.push(person);
    this.setState({people:tmpP,savePersonClicked:true});
  };

  render() {
    let currentView=<div><h2>Persons List</h2><PersonList people={this.state.people} updatePerson={this.updatePerson}/>
    <button name='addPersonButton' onClick={this.handleClick}>Add Person</button></div>;
    if(this.state.clicked){
      currentView=<AddPerson addPerson={this.addPerson}/>;
    }
    if(this.state.updatePersonClicked){
      currentView=<PersonEdit person={this.state.toUpdatePerson} savePerson={this.savePerson}/>;
    }
    if(this.state.savePersonClicked){
      currentView=<div><h2>Persons List</h2><PersonList people={this.state.people} updatePerson={this.updatePerson}/>
      <button name='addPersonButton' onClick={this.handleClick}>Add Person</button></div>;
    }
    return (
     <div className="App">
         {currentView}
      </div>
    );
  }
}