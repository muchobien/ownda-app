export function callAll<Args extends unknown[]>(
  ...fns: (((..._args: Args) => void) | undefined | null)[]
): (..._args: Args) => void {
  return (...args: Args) => {
    fns.forEach(fn => {
      if (typeof fn === 'function') {
        fn(...args);
      }
    });
  };
}
