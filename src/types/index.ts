export * from './navigation';
export * from './utils';

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function forwardRef<T, P = {}>(
    // eslint-disable-next-line no-unused-vars
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
    // eslint-disable-next-line no-unused-vars
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
