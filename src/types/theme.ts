import type { AppTheme } from '@app/theme';
import '@emotion/react';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends AppTheme {}
}

export interface ThemeProps {
  theme: AppTheme;
}
