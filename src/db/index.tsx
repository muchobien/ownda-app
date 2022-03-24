import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import type { FC } from 'react';
import { createContext } from 'react';
import { Account, Category, Transaction } from './models';
import { schema } from './schema';

const adapter = new SQLiteAdapter({
  schema,
  dbName: 'ownda',
  jsi: true,
});

export const database = new Database({
  adapter,
  modelClasses: [Account, Category, Transaction],
});

type DataBaseContextValue = {
  database: Database;
};

export const DatabaseContext = createContext<DataBaseContextValue>(
  {} as DataBaseContextValue,
);

export const DatabaseProvider: FC = ({ children }) => (
  <DatabaseContext.Provider value={{ database }}>
    {children}
  </DatabaseContext.Provider>
);
