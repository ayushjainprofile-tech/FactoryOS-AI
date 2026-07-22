import { useState, useEffect } from "react";

export type StateCreator<T> = (
  set: (partial: Partial<T> | ((state: T) => Partial<T>)) => void,
  get: () => T
) => T;

export function create<T>(initializer: StateCreator<T>) {
  let state: T;
  const listeners = new Set<() => void>();

  const set = (partial: any) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (nextState !== state) {
      state = { ...state, ...nextState };
      listeners.forEach((listener) => listener());
    }
  };

  const get = () => state;

  state = initializer(set, get);

  const useStore = (selector?: (state: T) => any) => {
    const [, forceUpdate] = useState(0);

    useEffect(() => {
      const listener = () => forceUpdate((c) => c + 1);
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    }, []);

    return selector ? selector(state) : state;
  };

  Object.assign(useStore, {
    getState: get,
    setState: set,
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  });

  return useStore as any;
}
