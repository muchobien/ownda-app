import type { ConnectProps } from '@app/types';
import { useCallback } from 'react';

export const useConnect = ({ navigation }: ConnectProps<'Auth'>) => {
  const { navigate } = navigation;

  const handleApple = useCallback(() => {
    navigate('Onboarding');
  }, [navigate]);

  const handleGoogle = useCallback(() => {
    navigate('Onboarding');
  }, [navigate]);

  const handleOffline = useCallback(() => {
    navigate('Onboarding');
  }, [navigate]);

  return {
    handleApple,
    handleGoogle,
    handleOffline,
  };
};
