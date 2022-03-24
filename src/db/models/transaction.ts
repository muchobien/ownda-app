import type { Relation } from '@nozbe/watermelondb';
import { Model } from '@nozbe/watermelondb';
import {
  date,
  field,
  readonly,
  relation,
} from '@nozbe/watermelondb/decorators';
import type { Associations } from '@nozbe/watermelondb/Model';
import type { Account } from './account';
import type { Category } from './category';
import { TableName } from './tables';

export const TransactionKind = {
  EXPENSE: 'EXPENSE',
  INCOME: 'INCOME',
  TRANSFER: 'TRANSFER',
} as const;
export type TransactionKind =
  typeof TransactionKind[keyof typeof TransactionKind];

export class Transaction extends Model {
  static table = TableName.TRANSACTIONS;
  static associations: Associations = {
    [TableName.CATEGORIES]: { type: 'belongs_to', key: 'category_id' },
    [TableName.ACCOUNTS]: { type: 'belongs_to', key: 'account_id' },
  };

  @field('name') name!: string;
  @field('amount') amount!: number;
  @field('kind') kind!: TransactionKind;
  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;
  @relation(TableName.CATEGORIES, 'category_id') category!: Relation<Category>;
  @relation(TableName.ACCOUNTS, 'account_id') account!: Relation<Account>;
}
