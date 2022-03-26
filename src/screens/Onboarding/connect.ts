import type { ConnectProps } from '@app/types';
import { useCallback, useRef, useState } from 'react';
import type {
  PagerView,
  PagerViewOnPageSelectedEvent,
} from 'react-native-pager-view';
export const useConnect = ({ navigation }: ConnectProps<'Onboarding'>) => {
  const { navigate } = navigation;
  const pagerRef = useRef<PagerView>(null);
  const [page, setPage] = useState(0);

  const handleBack = useCallback(() => {
    if (page === 0) {
      navigate('Auth');
      return;
    }
    pagerRef.current?.setPage(page - 1);
  }, [navigate, page]);

  const handlePageChange = useCallback(
    (event: PagerViewOnPageSelectedEvent) => {
      setPage(event.nativeEvent.position);
    },
    [],
  );

  const handleNext = useCallback(() => {
    pagerRef.current?.setPage(page + 1);
  }, [page]);

  return {
    pagerRef,
    handleBack,
    handlePageChange,
    handleNext,
  };
};
