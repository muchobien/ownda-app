import { withTheme } from '@emotion/react';
import Svg, { Path } from 'react-native-svg';
import type { InnerIconProps } from './types';

export const Apple = withTheme(({ size = 24, ...props }: InnerIconProps) => (
  <Svg
    width={size}
    height={(size * 25) / 20}
    fill="none"
    viewBox="0 0 20 25"
    {...props}
  >
    <Path
      d="M10.283 6.308c1.06 0 2.387-.738 3.177-1.722.716-.891 1.238-2.137 1.238-3.382 0-.169-.015-.338-.045-.476-1.178.046-2.595.814-3.445 1.844-.671.784-1.283 2.014-1.283 3.275 0 .184.03.369.045.43.075.016.194.031.313.031zM6.555 24.909c1.446 0 2.088-.999 3.893-.999 1.834 0 2.237.969 3.848.969 1.58 0 2.64-1.507 3.639-2.983 1.118-1.69 1.58-3.351 1.61-3.428-.104-.03-3.132-1.307-3.132-4.889 0-3.105 2.387-4.504 2.521-4.612-1.581-2.336-3.982-2.398-4.639-2.398-1.774 0-3.221 1.107-4.13 1.107-.985 0-2.283-1.045-3.82-1.045-2.922 0-5.89 2.49-5.89 7.194 0 2.921 1.103 6.011 2.46 8.01 1.164 1.69 2.178 3.074 3.64 3.074z"
      fill="#000"
    />
  </Svg>
));