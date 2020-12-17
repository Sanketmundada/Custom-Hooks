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
