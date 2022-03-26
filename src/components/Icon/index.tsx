import { memo } from 'react';
import { icon } from './constants';
import type { IconProps } from './types';

export const Icon = memo<IconProps>(({ name, ...props }) => {
  const InnerIcon = icon[name];
  return <InnerIcon {...props} />;
});

export default Icon;
