import React, { useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Loader from './reusables/components/loader/Loader';
import SuspenseWrapper from './reusables/components/suspenseWrapper/SuspenseWrapper';
import { useDidUpdate, usePrefetch } from './reusables/hooks';

const myDivImport = () => import('./MyDiv');

const App = () => {
  const [count, setCount] = useState<number>(0);
  const handleChange = () => {
    setCount((prev) => prev + 1);
  };

  useDidUpdate(() => console.log('Clicked'), [count]);
  // In this case Clicked is logged once we start button click
  // and not on initial render of page

  const MyDiv = usePrefetch(myDivImport);

  return (
    <div>
      <BrowserRouter>
        <SuspenseWrapper fallback={Loader}>
          {<Route path="/mydiv" component={MyDiv} />}
        </SuspenseWrapper>
        Hello From App
        <p>{count}</p>
        <button onClick={handleChange}>Increment</button>
        <Link to="/mydiv">Show My Div</Link>
      </BrowserRouter>
    </div>
  );
};

export default App;
