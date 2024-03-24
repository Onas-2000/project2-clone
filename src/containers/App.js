import React, { Component } from 'react';
import Classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 'afeif', name: 'Max', age: 28 },
        { id: 'viwd', name: 'Manu', age: 29 },
        { id: 'dnbue', name: 'Stephanie', age: 26 }
      ]
    };
  }


 
 togglePersonsHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons: !doesShow});
 }
 nameChangedHandler = (event, id) =>{
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person ={
     ...this.state.persons[personIndex]
  };

  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({persons: persons});
 }


 deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
 }
  render() {
  let  persons = null;
  // let btnClass = '';

  if(this.state.showPersons){
    persons = <Persons
      persons={this.state.persons}
      clicked={this.deletePersonHandler} 
      changed={this.nameChangedHandler}
      />;
    
     }
  
    

    return (
    
      <div className={Classes.App}>
        <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons} 
        persons={this.state.persons} 
        clicked={this.togglePersonsHandler} />
        {persons}

      </div>
    
    );
  }
}
  


export default App;
