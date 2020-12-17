import React, { useState } from 'react';
import { useDidUpdate } from './reusables/hooks';

const App = () => {
  const [count, setCount] = useState<number>(0);
  const handleChange = () => {
    setCount((prev) => prev + 1);
  };

  useDidUpdate(() => console.log('Clicked'), [count]);
  // In this case Clicked is logged once we start button click
  // and not on initial render of page

  return (
    <div>
      Hello From App
      <p>{count}</p>
      <button onClick={handleChange}>Increment</button>
    </div>
  );
};

export default App;
