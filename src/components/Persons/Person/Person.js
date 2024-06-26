import React from 'react';
import Classes from './Person.module.css'


const person = ( props ) => {
    
    return (
        <div className={Classes.Person}>
            <p onClick={props.click}>I'm {props.name} and we are {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;