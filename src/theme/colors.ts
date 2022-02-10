export const colors = {
  white: '#f8f8f8',
  white70: 'rgba(255, 255, 255, 0.7)',
  mediumWhite: '#EFEEF0',
  black: '#111114',
  surface: '#202020',
  surfaceDark: '#1c1c1c',
  mediumBlack: '#010101',
  background: '#010101',
  gray: '#939199',
  mediumGray: '#3C4253',
  transparent: 'rgba(0, 0, 0, 0)',
  ivy: '#6B4DFF',
  purple1: '#c34cff',
  purple2: '#ff4cff',
  blue: '#4cc3ff',
  blue2: '#45e6e6',
  blue3: '#457be6',
  green: '#14cc9e',
  green2: '#45e67b',
  green3: '#96e645',
  green4: '#c7e62e',
  yellow: '#ffee33',
  orange: '#f29f30',
  orange2: '#e67b45',
  orange3: '#ffc34c',
  red: '#ff4060',
  red2: '#e62e2e',
  red3: '#ff4ca6',
} as const;

export type colors = {
  [C in keyof typeof colors]: typeof colors[C];
};
