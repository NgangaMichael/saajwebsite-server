// src/models/committee.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'committees' })
export class Committee extends Model<Committee> {
  @Column({ allowNull: false, type: DataType.STRING })
  name!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  head!: string;

  @Column({ allowNull: true, type: DataType.STRING })
  subCommittee?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  totalMembers?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string;
}
