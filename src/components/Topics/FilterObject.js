import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super()
        
        this.state = {
            employess: [
                {
                    name: 'Skylar',
                    title: 'Human',
                    age: 12,
                  },
                  {
                    name: 'Jeremy',
                    age: 24,
                    hairColor: 'brown'
                  },
                  {
                    name: 'Armstrong legstrong',
                    title: 'CFO',
                  }  
            ],
            userInput: '',
            filterEmployees: []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val });
      }
    
      filterEmployees(prop) {
        let employees = this.state.employees;
        let filteredEmployees = [];
    
        for ( let i = 0; i < employees.length; i++ ) {
          if ( employees[i].hasOwnProperty(prop) ) {
            filteredEmployees.push(employees[i]);
          }
        }
    
        this.setState({ filteredEmployees: filteredEmployees });
      }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) }</span>
        <input className="inputLine" onChange={ (e) => this.handleChange (e.target.value) } ></input>
        <button className="confirmationButton" onClick={ () => this.filterEmloyees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )
  }
}