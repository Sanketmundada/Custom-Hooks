import { useEffect, useReducer } from 'react';
import useInterval from './useInterval';

const initialState: stateType = {
  dd: 0,
  hh: 0,
  mm: 0,
  ss: 0,
};

interface stateType {
  dd: number;
  hh: number;
  mm: number;
  ss: number;
}

interface setTimeAction {
  type: 'SET_TIME';
  timeState: stateType;
}

interface decreaseTimeAction {
  type: 'DECREASE_SECOND';
}

type actionType = setTimeAction | decreaseTimeAction;

const decreasedSecond = (state: stateType) => {
  let { dd, hh, mm, ss } = state;

  if (ss > 0) ss--;
  else if (mm > 0) {
    ss = 59;
    mm--;
  } else if (hh > 0) {
    ss = 59;
    mm = 59;
    hh--;
  } else if (dd > 0) {
    ss = 59;
    mm = 59;
    hh = 23;
    dd--;
  } else return state;

  return { dd, hh, mm, ss };
};

const reducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case 'SET_TIME':
      return action.timeState;
    case 'DECREASE_SECOND':
      return decreasedSecond(state);
    default:
      return state;
  }
};

const useTimer = (timeStamp: number) => {
  const [timer, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timeState: stateType = {
      dd: Math.floor(timeStamp / (1000 * 60 * 60 * 24)),
      hh: Math.floor((timeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mm: Math.floor((timeStamp % (1000 * 60 * 60)) / (1000 * 60)),
      ss: Math.floor((timeStamp % (1000 * 60)) / 1000),
    };
    dispatch({ type: 'SET_TIME', timeState });
  }, [timeStamp]);

  useInterval(() => {
    dispatch({ type: 'DECREASE_SECOND' });
  }, 1000);

  return timer;
};

export default useTimer;

/*
    This hook is usefull in case where we want to 
    implement timer.
    Input to this hook is time in ms
*/
