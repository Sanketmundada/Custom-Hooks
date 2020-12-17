import { useEffect, useRef } from 'react';
import { useDidUpdateStruct } from './types';

const useDidUpdate: useDidUpdateStruct = (func, deps) => {
  const didMount = useRef<boolean>(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
};

export default useDidUpdate;

/*
    This hook is similar to componentDidUpdate
    Don't execute on first render
        Useful for API calls on any DOM update
        Use this as an opportunity to operate on the DOM when the component has been updated.    
*/
