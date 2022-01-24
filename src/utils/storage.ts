import type { MMKVConfiguration } from 'react-native-mmkv';
import { MMKV } from 'react-native-mmkv';

export type StorageKey = `@${string}`;

class Storage extends MMKV {
  constructor(config?: MMKVConfiguration) {
    super(config);
  }

  getObject<T>(key: StorageKey): T | undefined {
    const value = this.getString(key);
    if (!value) return;

    return JSON.parse(value);
  }

  setObject<T>(key: StorageKey, value: T): void {
    this.set(key, JSON.stringify(value));
  }

  getString(key: StorageKey): string | undefined {
    return super.getString(key);
  }

  getNumber(key: StorageKey): number {
    return super.getNumber(key);
  }

  getBoolean(key: StorageKey): boolean {
    return super.getBoolean(key);
  }

  delete(key: StorageKey): void {
    super.delete(key);
  }

  set(key: StorageKey, value: string | number | boolean): void {
    super.set(key, value);
  }
}

export const storage = new Storage();
