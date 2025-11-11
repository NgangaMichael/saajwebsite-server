// src/models/communication.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'communications', timestamps: true })
export class Communication extends Model<Communication> {

  @Column({ allowNull: false, type: DataType.STRING })
  title!: string;

  @Column({ allowNull: false, type: DataType.TEXT })
  info!: string;

  @Column({ allowNull: false, type: DataType.TEXT })
  sender!: string;

  @Column({ allowNull: false, type: DataType.TEXT })
  sendto!: string;

  @Column({ allowNull: false, type: DataType.INTEGER })
  sendtoid!: number;
}
