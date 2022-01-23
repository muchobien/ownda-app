import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './navigation';
import { useApp } from './hooks';
import type { PFC } from './types';
import { StatusBar } from './components';
import { Provider } from 'urql';
import { LogBox } from 'react-native';

// FIXME: https://github.com/software-mansion/react-native-gesture-handler/issues/1770
LogBox.ignoreLogs(['RNGestureHandlerModule']);

export const App: PFC = () => {
  const { authenticated, client, handleReady, navigationRef, ready } = useApp();

  if (!ready) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar />
      <Provider value={client}>
        <Navigation
          ref={navigationRef}
          authenticated={authenticated}
          onReady={handleReady}
        />
      </Provider>
    </SafeAreaProvider>
  );
};
