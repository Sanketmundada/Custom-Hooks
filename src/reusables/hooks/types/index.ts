export type useDidUpdateStruct = (func: () => void, deps: Array<any>) => void;

export type usePrefetchStruct = (
  factory: () => Promise<{
    default: React.ComponentType<any>;
  }>
) => any | null;
