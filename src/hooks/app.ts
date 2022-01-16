import { useCallback, useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';

export const useApp = () => {
  const [ready, setReady] = useState(false);

  const handleReady = useCallback(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  useEffect(() => {
    setReady(true);
  }, []);

  return {
    ready,
    handleReady,
  };
};
