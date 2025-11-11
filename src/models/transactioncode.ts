// src/models/transactioncode.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'transactioncodes' })
export class Transactioncodes extends Model<Transactioncodes> {
  @Column({ allowNull: false, type: DataType.STRING })
  userid!: number;

  @Column({ allowNull: false, type: DataType.STRING })
  code!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  receiptno!: string;
}
