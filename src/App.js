import React from 'react';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, Im a React App</h1>
      <p>This is really working!</p>
      <Person name="Max" age="29" />
      <Person name="Manu" age="31">
        My Hobbies: Racing
      </Person>
    </div>
  );
}

export default App;
