import React from 'react';

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm a {props.name} and I'm years {props.age} old!
      </p>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default person;
