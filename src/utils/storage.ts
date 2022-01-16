import { MMKV } from 'react-native-mmkv';

export const enum Key {
  Auth = '@auth',
}

type StorageKey = `${Key}`;

class Storage extends MMKV {
  constructor() {
    super();
  }

  getObject<T extends Record<string, unknown>>(key: StorageKey): T | undefined {
    const value = this.getString(key);
    if (!value) return;

    return JSON.parse(value);
  }

  setObject<T extends Record<string, unknown>>(
    key: StorageKey,
    value: T,
  ): void {
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
