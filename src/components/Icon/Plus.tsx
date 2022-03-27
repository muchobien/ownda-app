import { withTheme } from '@emotion/react';
import Svg, { Path } from 'react-native-svg';
import type { InnerIconProps } from './types';

export const Plus = withTheme(
  ({ size = 24, color = 'white', theme, ...props }: InnerIconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.25a.75.75 0 01.75.75v6.25H19a.75.75 0 010 1.5h-6.25V19a.75.75 0 01-1.5 0v-6.25H5a.75.75 0 010-1.5h6.25V5a.75.75 0 01.75-.75z"
        fill={theme.colors[color]}
      />
    </Svg>
  ),
);
