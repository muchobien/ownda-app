declare module '*.json' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;
  export default value;
}

declare module '*.png' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: number;
  export default value;
}
