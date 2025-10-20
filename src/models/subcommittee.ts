// src/models/subcommittee.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'subcommittees' })
export class SubCommittee extends Model<SubCommittee> {
  @Column({ allowNull: false, type: DataType.STRING })
  name!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  head!: string;

  @Column({ allowNull: true, type: DataType.STRING })
  committee?: string;
}
