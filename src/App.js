import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
  state = {
    persons: [{ name: 'Max', age: 29 }, { name: 'Manu', age: 31 }],
    showPersons: false
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.togglePersonHandler}>Show Persons</button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[0].age}
            >
              My Hobbies: Racing
            </Person>
          </div>
        ) : null}
      </div>
    );
  }
}
export default App;
