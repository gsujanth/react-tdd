import React, { Component } from 'react';
import PersonList from './PersonList';
import AddPerson from './AddPerson';
import PersonEdit from './PersonEdit';

const uuid = require('uuid');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      people: [
        { firstName: 'Alan', lastName: 'Turing' ,id:'dtdtg'},
        { firstName: 'Alanzo', lastName: 'Church', id:'fgueg' },
        { firstName: 'Grace', lastName: 'Hopper', id:'3t6' }
      ],
      clicked:'',
      toUpdatePerson:{}
    };
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick=()=>{
    this.setState({
      clicked:'addPerson'
    });
  }

  addPerson = (person) => {
		const people = [...this.state.people];
		people.push(person);
    this.setState({ people,clicked:'add' });
  };

  updatePerson =(person)=>{
      this.setState({clicked:'updatePerson',toUpdatePerson:person});
  };

  savePerson =(person)=>{
    let tmpPeople = [...this.state.people];
    let tmpP= tmpPeople.filter((person1)=>person1.id !== person.id);
    tmpP.push(person);
    this.setState({people:tmpP,clicked:'savePerson'});
  };

  deletePerson =(person)=>{
    let tmpPeople = [...this.state.people];
    let tmpP= tmpPeople.filter((person1)=>person1.id !== person.id);
    this.setState({people:tmpP,clicked:'deletePerson'});
  };

  cancel =()=>{
    this.setState({clicked:'cancel'});
  };

  render() {
    let currentView=<div><h2>Persons List</h2><PersonList people={this.state.people} updatePerson={this.updatePerson}/>
    <button name='addPersonButton' onClick={this.handleClick}>Add Person</button></div>;
    if(this.state.clicked==='addPerson'){
      currentView=<AddPerson addPerson={this.addPerson}/>;
    }

    if(this.state.clicked==='updatePerson'){
      currentView=<PersonEdit person={this.state.toUpdatePerson} savePerson={this.savePerson} deletePerson={this.deletePerson} cancel={this.cancel}/>;
    }
    if(this.state.clicked==='savePerson'){
      currentView=<div><h2>Persons List</h2><PersonList people={this.state.people} updatePerson={this.updatePerson}/>
      <button name='addPersonButton' onClick={this.handleClick}>Add Person</button></div>;
    }
    if(this.state.clicked==='deletePerson'){
      currentView=<div><h2>Persons List</h2><PersonList people={this.state.people} updatePerson={this.updatePerson}/>
      <button name='addPersonButton' onClick={this.handleClick}>Add Person</button></div>;
    }
    if(this.state.clicked==='add'){
      currentView=<div><h2>Persons List</h2><PersonList people={this.state.people} updatePerson={this.updatePerson}/>
      <button name='addPersonButton' onClick={this.handleClick}>Add Person</button></div>;
    }
    if(this.state.clicked==='cancel'){
      currentView=<div><h2>Persons List</h2><PersonList people={this.state.people} updatePerson={this.updatePerson}/>
      <button name='addPersonButton' onClick={this.handleClick}>Add Person</button></div>;
    }
    return (
     <div className="App" id="app123">
         {currentView}
      </div>
    );
  }
}