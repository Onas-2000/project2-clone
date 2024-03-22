import React, { Component } from 'react';
import Classes from './App.module.css';
import Person from './Person/Person';

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
  let btnClass = '';

  if(this.state.showPersons){
    persons = (
      <div>
      {this.state.persons.map((person, index )=> {
        return <Person 
        click= {() => this.deletePersonHandler(index)}
        name= {person.name} 
        age= {person.age}
        key={person.id}
        changed={(event) => this.nameChangedHandler(event, person.id)}
        />
      })}
      </div> 
    );
    
    btnClass = Classes.Red
    }
  
    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push( Classes.red )
    }
    if(this.state.persons.length <= 1){
      classes.push( Classes.bold );
    }

    return (
    
      <div className={Classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* Pass 'Maximilian' as a parameter to switchNameHandler */}
        <button 
        // style = {style}
        className={btnClass}
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
        {/* Render Person components */}

      </div>
    
    );
  }
}
  


export default App;
