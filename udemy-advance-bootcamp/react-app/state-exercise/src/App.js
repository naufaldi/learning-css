import React, { Component } from 'react';
import './App.css';

const InstructorItem = props => {
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Hobbies : {props.hobbies.join(", ")} </h4>
    </li>
  )
}

InstructorItem.propTypes = {
  name : PropTypes.string,
  hobbies :  PropTypes.arrayOf(PropTypes.string)
}

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
    setTimeout(() => {
      const randInst = Math.floor(
        Math.random() *
        this.state.instructors.length
      );
      const hobbyIndex = Math.floor(
        Math.random() *
        this.state.instructors[randInst].length
      );
      const instructors = this.state.instructors.map((inst, i) => {
        if (i === randInst) {
          const hobbies = [...inst.hobbies];
          hobbies.splice(hobbyIndex, 1);
          return {
            ...inst,
            hobbies
          };
        }
        
        return inst;
      });
      this.setState({instructors});
    }, 5000);  }
 

  render() {
    const instructors = this.state.instructors.map((instructions,index)=>(
      <InstructorItem
      key={index}
      name={instructions.name}
      hobbies={instructions.hobbies}
      />
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
