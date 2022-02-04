import type { ThemeProps } from '@app/types/theme';
import type { ViewProps } from 'react-native';
import type { GProps, SvgProps } from 'react-native-svg';
import type { IconName } from './constants';

export interface InnerIconProps
  extends GProps,
    ViewProps,
    Pick<SvgProps, 'viewBox' | 'preserveAspectRatio' | 'title'>,
    ThemeProps {
  filled?: boolean;
  size?: number;
  color?: keyof ThemeProps['theme']['colors'];
}

export interface IconProps extends Omit<InnerIconProps, 'theme'> {
  name: IconName;
}
