import type {
  SerializedEntries,
  StorageAdapter,
} from '@urql/exchange-graphcache';
import type { NetInfoSubscription } from '@react-native-community/netinfo';
import NetInfo from '@react-native-community/netinfo';
import type { StorageKey } from './storage';
import { storage } from './storage';

export type StorageOptions<T extends StorageKey = StorageKey> = {
  dataKey?: T;
  metadataKey?: T;
  maxAge?: number; // Number of days
};

let disconnect: NetInfoSubscription | undefined;

export interface DefaultStorage extends StorageAdapter {
  clear(): void;
}

export const makeUrqlStorage = ({
  dataKey = '@graphcache-data',
  metadataKey = '@graphcache-metadata',
  maxAge = 7,
}: StorageOptions = {}): DefaultStorage => {
  const todayDayStamp = Math.floor(
    new Date().valueOf() / (1000 * 60 * 60 * 24),
  );

  const allData: Record<string | number, unknown> = {};

  return {
    readData: async () => {
      if (!Object.keys(allData).length) {
        const parsed = storage.getObject<SerializedEntries>(dataKey) ?? {};
        Object.assign(allData, parsed);
      }

      // clean up old data
      let syncNeeded = false;
      Object.keys(allData).forEach(dayStamp => {
        if (todayDayStamp - Number(dayStamp) > maxAge) {
          syncNeeded = true;
          delete allData[dayStamp];
        }
      });

      if (syncNeeded) {
        storage.setObject(dataKey, allData);
      }

      return Object.assign(
        {},
        ...Object.keys(allData).map(key => allData[key]),
      );
    },

    writeData: async delta => {
      if (!Object.keys(allData).length) {
        const parsed = storage.getObject<SerializedEntries>(dataKey) ?? {};
        Object.assign(allData, parsed);
      }

      const deletedKeys: SerializedEntries = {};
      Object.keys(delta).forEach(key => {
        if (delta[key] === undefined) {
          deletedKeys[key] = undefined;
        }
      });

      for (const key in allData) {
        allData[key] = Object.assign(allData[key], deletedKeys);
      }

      allData[todayDayStamp] = Object.assign(
        allData[todayDayStamp] || {},
        delta,
      );

      storage.setObject(dataKey, allData);
    },
    writeMetadata: data => storage.setObject(metadataKey, data),
    readMetadata: () => Promise.resolve(storage.getObject(metadataKey) ?? []),
    onOnline: cb => {
      if (disconnect) {
        disconnect();
        disconnect = undefined;
      }

      disconnect = NetInfo.addEventListener(({ isConnected }) => {
        if (isConnected) {
          cb();
        }
      });
    },

    clear: () => {
      storage.clearAll();
    },
  };
};
