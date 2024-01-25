import {useState, useCallback} from 'react';

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here
  // Define handleIncrement function with useCallback
  const handleIncrement = useCallback(() => {
    console.log('handleIncrement function is called');
    setCount((prev) => prev + 1);
  }, []);

  // Define handleDecrement function with useCallback
  const handleDecrement = useCallback(() => {
    console.log('handleDecrement function is called');
    setCount((prev) => prev - 1);
  }, []);

  // Check identity of handleIncrement and handleDecrement
  console.log('handleIncrement identity:', handleIncrement);
  console.log('handleDecrement identity:', handleDecrement);

  // Your code ends here
  // console.log('component rerender');
  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = ({onIncrement, onDecrement}) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
);
