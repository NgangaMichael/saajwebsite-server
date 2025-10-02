// src/models/communication.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'communications', timestamps: true })
export class Communication extends Model<Communication> {
  @Column({ allowNull: false, type: DataType.STRING })
  memberNumber!: string; // recipient

  @Column({ allowNull: false, type: DataType.STRING })
  title!: string;

  @Column({ allowNull: false, type: DataType.TEXT })
  info!: string;

  @Column({ allowNull: false, type: DataType.ENUM('low', 'medium', 'high') })
  level!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  postedBy!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  to!: string;
}
