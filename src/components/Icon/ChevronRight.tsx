import { withTheme } from '@emotion/react';
import Svg, { Path } from 'react-native-svg';
import type { InnerIconProps } from './types';

export const ChevronRight = withTheme(
  ({ size = 24, color = 'white', theme, ...props }: InnerIconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.47 5.47a.75.75 0 011.06 0l3.738 3.737.021.021c.378.378.693.693.93.972.246.29.451.59.568.95a2.75 2.75 0 010 1.7c-.117.36-.322.66-.568.95-.237.279-.552.594-.93.971l-.021.022-3.738 3.737a.75.75 0 11-1.06-1.06l3.737-3.738c.405-.404.676-.676.868-.903.187-.22.254-.346.285-.443a1.25 1.25 0 000-.772c-.031-.097-.098-.224-.285-.443-.192-.227-.463-.499-.868-.903L9.47 6.53a.75.75 0 010-1.06z"
        fill={theme.colors[color]}
      />
    </Svg>
  ),
);
