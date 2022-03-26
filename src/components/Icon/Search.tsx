import { withTheme } from '@emotion/react';
import Svg, { Path } from 'react-native-svg';
import type { InnerIconProps } from './types';

export const Search = withTheme(
  ({ size = 24, color = 'white', theme, ...props }: InnerIconProps) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 11a8.25 8.25 0 1116.5 0 8.25 8.25 0 01-16.5 0zM11 1.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a9.712 9.712 0 006.344-2.346l3.126 3.126a.75.75 0 101.06-1.06l-3.126-3.126A9.712 9.712 0 0020.75 11c0-5.385-4.365-9.75-9.75-9.75z"
        fill={theme.colors[color]}
      />
    </Svg>
  ),
);
