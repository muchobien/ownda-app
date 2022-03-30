import type { KeysOfType } from '@app/types';
import {
  useMMKVObject,
  useMMKVNumber,
  useMMKVString,
  useMMKVBoolean,
  MMKV,
} from 'react-native-mmkv';

export type KeyType = {
  '@auth': string;
  '@logged': boolean;
};

export type BooleanKey = KeysOfType<KeyType, boolean>;
export type StringKey = KeysOfType<KeyType, string>;
export type NumberKey = KeysOfType<KeyType, number>;
export type StorageKey = BooleanKey | StringKey | NumberKey;

class Storage extends MMKV {
  getObject<T extends Record<string, unknown>>(key: StringKey): T | undefined {
    const value = this.getString(key);
    if (!value) return;

    return JSON.parse(value);
  }

  setObject<T extends Record<string, unknown>>(key: StringKey, value: T): void {
    this.set(key, JSON.stringify(value));
  }

  getString(key: StringKey): string | undefined {
    return super.getString(key);
  }

  getNumber(key: NumberKey): number | undefined {
    return super.getNumber(key);
  }

  getBoolean(key: BooleanKey): boolean | undefined {
    return super.getBoolean(key);
  }

  delete(key: StorageKey): void {
    super.delete(key);
  }

  set(key: StorageKey, value: string | number | boolean): void {
    super.set(key, value);
  }

  asMMKV(): MMKV {
    return this;
  }
}

export const store = new Storage();

export const useStoreBoolean = (key: BooleanKey) => useMMKVBoolean(key, store);
export const useStoreString = (key: StringKey) => useMMKVString(key, store);
export const useStoreNumber = (key: NumberKey) => useMMKVNumber(key, store);
export const useStoreObject = <T extends Record<string, unknown>>(
  key: StringKey,
) => useMMKVObject<T>(key, store);
