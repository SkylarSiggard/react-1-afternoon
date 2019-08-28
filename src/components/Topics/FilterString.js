import React, { Component } from 'react';

class FilterString extends Component{
    constructor() {
        super()
        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredNames: [] 
        }
    }
    render() {
        return (
          <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
        <span className="puzzleText"></span>
        <input className="inputLine"></input>
        <button className="confirmationButton"> Filter </button>
        <span className="resultsBox filterStringRB"></span>  
          </div>
        )
    }
}
export default FilterString


// hahdh