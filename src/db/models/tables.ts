export const TableName = {
  ACCOUNTS: 'ACCOUNTS',
  CATEGORIES: 'CATEGORIES',
  TRANSACTIONS: 'TRANSACTIONS',
} as const;

export type TableName = typeof TableName[keyof typeof TableName];
