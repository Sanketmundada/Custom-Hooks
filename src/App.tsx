import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Loader from './reusables/components/loader/Loader';
import SuspenseWrapper from './reusables/components/suspenseWrapper/SuspenseWrapper';
import { useDidUpdate, useInterval, usePrefetch } from './reusables/hooks';

const myDivImport = () => import('./MyDiv');

const Home = () => {
  const [count, setCount] = useState<number>(0);
  const handleChange = () => {
    setCount((prev) => prev + 1);
  };

  useDidUpdate(() => console.log('Clicked'), [count]);
  // In this case Clicked is logged once we start button click
  // and not on initial render of page
  useInterval(() => setCount((prev) => prev + 1), count > 10 ? 200 : 1000);

  return (
    <div style={{ backgroundColor: 'dodgerblue', height: '100p  x' }}>
      {' '}
      Hello From App
      <p>{count}</p>
      <button onClick={handleChange}>Increment</button> <div>Counter</div>
      <h1>{count}</h1>
      <Link to="/mydiv">Show My Div</Link>
    </div>
  );
};

const App = () => {
  const MyDiv = usePrefetch(myDivImport);

  //const MyDiv1 = lazy(myDivImport);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <SuspenseWrapper fallback={Loader}>
            {<Route exact path="/mydiv" component={MyDiv} />}
          </SuspenseWrapper>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
