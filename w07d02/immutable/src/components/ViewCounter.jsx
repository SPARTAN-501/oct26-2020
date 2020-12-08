import {useState} from 'react';

const ViewCounter = () => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((prev) => {
      return prev + 1;
    });
    setCounter((previousState) => {
      return previousState + 1;
    });
    setCounter((previousState) => {
      return previousState + 1;
    });
  };

  return (
    <div>
      <h2>Number of visitors: {counter}</h2>
      <button onClick={clickHandler}>Increment</button>
      <button onClick={() => setCounter(counter + 1)}>Anon</button>
    </div>
  );
};

export default ViewCounter;
