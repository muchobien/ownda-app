import type { PFC } from '@app/types';

export type ViewProps = {
  onPressNext: () => void;
};

export type View = PFC<ViewProps>;
