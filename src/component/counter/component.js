import React, { useState } from 'react';

function Counter(props) {
  const [number, setNumber] = useState(28);
  const { classes } = props;
  return (
    <React.Fragment>
      <h1>hello world</h1>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </React.Fragment>
  );
}

export default Counter;
