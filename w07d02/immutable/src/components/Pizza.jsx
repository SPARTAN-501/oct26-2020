import {useState} from 'react';

const Pizza = () => {
  // const [toppings, setToppings] = useState([]);
  // const [newTopping, setNewTopping] = useState('');

  const [pizza, setPizza] = useState({
    toppings: [],
    crust: '',
    newTopping: ''
  });

  const handleClick = () => {
    // setToppings([...toppings, newTopping]);

    // setToppings((prevToppings) => {
    //   return [newTopping, ...prevToppings];
    // });
    // setNewTopping('');

    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        toppings: [
          ...prevPizza.toppings,
          prevPizza.newTopping
        ],
        newTopping: ''
      }
    });
  };

  const setTopping = (event) => {
    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        newTopping: event.target.value
      };
    });
  };

  const setCrust = (event) => {
    setPizza((prevPizza) => {
      return {
        ...prevPizza,
        crust: event.target.value
      }
    });
  };

  return (
    <div>
      <h2>Create your own pizza!</h2>

      <label>New Topping:</label>
      <input
        onChange={setTopping}
        value={pizza.newTopping}
      />
      <button onClick={handleClick}>Add to Pizza</button>

      <label>Crust Type:</label>
      <input 
        onChange={setCrust}
        value={pizza.crust}
      />

      { pizza.toppings.map((topping, index) => <h3 key={index}>{topping}</h3>) }
    </div>
  );
};

export default Pizza;
