import { Query, Model } from '@nozbe/watermelondb';
import {
  children,
  date,
  field,
  readonly,
} from '@nozbe/watermelondb/decorators';
import type { Associations } from '@nozbe/watermelondb/Model';
import { TableName } from './tables';
import type { Transaction } from './transaction';

export class Account extends Model {
  static table = TableName.ACCOUNTS;

  static associations: Associations = {
    [TableName.TRANSACTIONS]: { type: 'has_many', foreignKey: 'account_id' },
  };

  @field('name') name!: string;
  @field('color') color!: string;
  @children(TableName.TRANSACTIONS) transactions!: Query<Transaction>;
  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;
}
