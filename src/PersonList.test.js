import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PersonList from './PersonList';
import {shallow} from 'enzyme';

describe('testing PersonList component',()=>{

    let tempPeople, wrapper;
    beforeEach(() => {
         tempPeople=[
            { firstName: 'Alan', lastName: 'Turing' ,id:'hgeufh'},
            { firstName: 'Alanzo', lastName: 'Church', id:'fgueg' },
            { firstName: 'Grace', lastName: 'Hopper', id:'3t6' }
          ];
         wrapper=shallow(<PersonList people={tempPeople}/>);
    })
   
   it('checking the received state',()=>{
        expect(wrapper.instance().props.people).toEqual(tempPeople);
   });

    it('checking the presence of ul',()=>{
        expect(wrapper.find('ul').length).toEqual(1);
    });

    it('checking the presence of li',()=>{
        expect(wrapper.find('li').length).toEqual(3);
    });
   
})