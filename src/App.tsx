import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import Loader from './reusables/components/loader/Loader';
import ScrollToTopButton from './reusables/components/scrollToTopButton/ScrollToTopButton';
import SuspenseWrapper from './reusables/components/suspenseWrapper/SuspenseWrapper';
import { usePrefetch, useTimer } from './reusables/hooks';
const myDivImport = () => import('./MyDiv');

const Home = () => {
  const [count, setCount] = useState<number>(0);
  const handleChange = () => {
    setCount((prev) => prev + 1);
  };

  //useDidUpdate(() => console.log('Clicked'), [count]);
  // In this case Clicked is logged once we start button click
  // and not on initial render of page

  //useInterval(() => setCount((prev) => prev + 1), count > 10 ? 200 : 1000);

  const { dd, hh, mm, ss } = useTimer(86400);

  return (
    <div style={{ backgroundColor: 'dodgerblue', height: '190vh' }}>
      {' '}
      Hello From App
      <p>{count}</p>
      <button onClick={handleChange}>Increment</button> <div>Counter</div>
      <h1>{count}</h1>
      <Link to="/mydiv">Show My Div</Link>
      <h1>Timer</h1>
      <h3>
        {hh} : {dd} : {mm} :{ss}
      </h3>
      <ScrollToTopButton
        offset={200}
        render={(scrollToTop) => {
          return <div className={styles.outer} onClick={scrollToTop}></div>;
        }}
      />
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
