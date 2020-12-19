import { useEffect, useRef } from 'react';
import { useIntervalStruct } from './types';

const useInterval: useIntervalStruct = (callback, delay) => {
  const saveCallback = useRef<() => void>(() => {});

  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      saveCallback.current();
    };

    if (delay != null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id); // This is important so as to clear the effect on unMount (Think about it as every time there is new useEffect execution, the old one get deleted)
    }
  }, [delay]);
};

export default useInterval;

/* 
    This hook can be used in the cases where we want some action to be repeatedly performed after certain interval of time
*/
