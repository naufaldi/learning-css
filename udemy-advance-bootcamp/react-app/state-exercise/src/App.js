import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      instructors : [
        {        name: 'tim',
                hobbies: ['sailing','react']
        },
        {
          name: 'matt',
          hobbies: ['eat','vue']
        },{
          name: 'elisa',
          hobbies: ['love','node']
        },{
          name: 'tanthowi',
          hobbies: ['music','es2017']
        }
      ]
    };
  }
  render() {
    const instructors = this.state.instructors.map((instructions,index)=>(
      <li key={index}>
        <h3>{instructions.name}</h3>
        <h4>Hobbies: {instructions.hobbies.join(", ")}</h4>
      </li>
    ))
    return (
      <div className="App">
       <ul>
        {instructors}
       </ul>
      </div>
    );
  }
}

export default App;
