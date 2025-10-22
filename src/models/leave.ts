import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user.js";

@Table({ tableName: "leaves" })
export class Leave extends Model<Leave> {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare userId: number;

  @BelongsTo(() => User)
  declare user: User;

  @Column({ type: DataType.STRING, allowNull: false })
  declare leaveType: string; // e.g. "Sick", "Annual", "Maternity", etc.

  @Column({ type: DataType.DATEONLY, allowNull: false })
  declare startDate: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  declare endDate: string;

  @Column({ type: DataType.STRING })
  declare reason: string | null;

  @Column({ type: DataType.STRING, defaultValue: "Pending" })
  declare status: string; // Pending | Approved | Rejected

  @Column({ type: DataType.STRING })
  declare approvedBy: string | null;
}
