import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './navigation';
import { useApp } from './hooks';
import type { PFC } from './types';
import { StatusBar } from './components';
import { Provider } from 'urql';
import { client } from './graphql';

export const App: PFC = () => {
  const { ready, handleReady } = useApp();

  if (!ready) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar />
      <Provider value={client}>
        <Navigation onReady={handleReady} />
      </Provider>
    </SafeAreaProvider>
  );
};
