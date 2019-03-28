import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddPerson from './AddPerson';
import PersonEdit from './PersonEdit';
import PersonList from './PersonList';
import {shallow,mount} from 'enzyme';

describe('testing App component',()=>{
    //beforeEach(() => wrapper = shallow(<App />));
    const wrapper=shallow(<App/>);
    it('checking the presence of div',()=>{
        expect(wrapper.find('div').length).toEqual(2);
    });

    it('to test presence of people',()=>{
        let tempPeople=[
            { firstName: 'Alan', lastName: 'Turing' ,id:'hgeufh'},
            { firstName: 'Alanzo', lastName: 'Church', id:'fgueg' },
            { firstName: 'Grace', lastName: 'Hopper', id:'3t6' }
          ];
      expect(wrapper.state('people')).toEqual(tempPeople);
    });

    it('to test presence of personList',()=>{
        expect(wrapper.find('PersonList').length).toEqual(1);
    });

    it('to test presence of add person button',()=>{
        expect(wrapper.find('button').length).toEqual(1);
    });

    it('to test people props passed from App component to PersonList',()=>{
        //console.log(wrapper.find("PersonList").props);
        expect(wrapper.find("PersonList").props().people).toEqual(wrapper.state('people'));
    });

    it("calls addPerson with state", () => {
		//mock function with jest
		const mockAddPerson = jest.fn();
		const wrapper = shallow(<AddPerson addPerson={mockAddPerson} />);
		const submitState = { firstName: "Daniel", lastName: "Lai","id": "c92b3223-d3d5-4f66-ad2e-44d1473c2382" };
		wrapper.setState(submitState);
		wrapper.find("form").simulate("submit");
		expect(mockAddPerson).toBeCalledWith(submitState);
    });
    
    it("calls savePerson with state",()=>{
        const mockSavePerson =jest.fn();
        const saveState = { firstName: "Anil", lastName: "Lai","id": "c92b3223-d3d5-4f66-ad2e-44d1473c2382" };
        const wrapper =shallow(<PersonEdit person={saveState} savePerson={mockSavePerson}/>);
        wrapper.setState(saveState);
        wrapper.find("form").simulate("submit");
        expect(mockSavePerson).toBeCalledWith(saveState);
    });

    it("calls deletePerson with state",()=>{
        const toDeleteState = { firstName: "Anil", lastName: "Lai","id": "c92b3223-d3d5-4f66-ad2e-44d1473c2382" };
        const mockDeletePerson =jest.fn();
        const wrapperEdit =shallow(<PersonEdit person={toDeleteState} deletePerson={mockDeletePerson}/>);
        wrapperEdit.find("button").at(1).simulate("click",wrapperEdit.setState(toDeleteState));
        //console.log(wrapperEdit.state());
        expect(mockDeletePerson).toBeCalledWith(toDeleteState);
    });

    it("exp:calls deletePerson with state",()=>{
        const wrapper = shallow(<App/>);
        const app = wrapper.instance();
        const tPerson={ firstName: "Anil", lastName: "Lai","id": "c92b3223-d3d5-4f66-ad2e-44d1473c2382" };
        app.addPerson(tPerson);
        //console.log(wrapper.state().people);
        app.deletePerson(tPerson);
        //console.log(wrapper.state().people);
    });

    it('testing input of firstName',() => {
        const mockSavePerson =jest.fn();
        const tmpState = { firstName: "", lastName: "","id": "" };
        const wrapper =shallow(<PersonEdit person={tmpState} savePerson={mockSavePerson}/>); 
        wrapper.find('input').at(0).simulate('change',{target : {name : "firstName",value: "www"}});
        wrapper.find('input').at(1).simulate('change',{target : {name : "lastName",value: "com"}});
        //{target : {name : "firstName",value: "anil"}
        //console.log(wrapper.state().firstName);
        //console.log(wrapper.state().lastName);
        expect(wrapper.state().firstName).toEqual("www");
        expect(wrapper.state().lastName).toEqual("com");
    });
});