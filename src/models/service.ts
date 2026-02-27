// src/models/service.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'service' })
export class Service extends Model<Service> {
  @Column({ allowNull: false, type: DataType.STRING })
  servicename!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  servicelink!: string;
}
