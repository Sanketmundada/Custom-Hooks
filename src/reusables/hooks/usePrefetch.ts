import { lazy, useEffect, useState } from 'react';
import { usePrefetchStruct } from './types';

const usePrefetch: usePrefetchStruct = (factory) => {
  const [component, setComponent] = useState<React.LazyExoticComponent<
    React.ComponentType<any>
  > | null>(null);

  useEffect(() => {
    const comp = lazy(factory);
    setComponent(comp);
  }, [factory]);

  return component;
};

export default usePrefetch;

/*
  The usePrefetch hook can help you improve the loading time of the main app page by lazy loading other secondary components that don’t need to render on the first view. 
  Why do we define an importModal function? Because if we write the import inline, it will happen every time a new function is called, and it will run the useEffect inside the hooks on every render.

*/
