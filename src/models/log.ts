// src/models/log.ts
import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "logs" })
export class Log extends Model<Log> {
  @Column({ allowNull: false, type: DataType.STRING })
  entity!: string; // e.g. "Committee"

  @Column({ allowNull: false, type: DataType.INTEGER })
  entityId!: number; // primary key of the entity

  @Column({ allowNull: false, type: DataType.STRING })
  action!: string; // "UPDATE", "DELETE", etc.

  @Column({ allowNull: true, type: DataType.JSON })
  beforeData?: any; // previous state (optional, for updates/deletes)

  @Column({ allowNull: true, type: DataType.JSON })
  afterData?: any; // new state (optional, for updates)

  @Column({ allowNull: true, type: DataType.STRING })
  performedBy?: string | null; // allow null or undefined

}
