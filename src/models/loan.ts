import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user.js";

@Table({ tableName: "loans" })
export class Loan extends Model<Loan> {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare userId: number;

  @BelongsTo(() => User)
  declare user: User;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  declare amount: number;

  @Column({ type: DataType.STRING, allowNull: false })
  declare purpose: string; // e.g., "Emergency", "Education", "Medical", etc.

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare repaymentMonths: number;

  @Column({ type: DataType.STRING })
  declare reason: string | null;

  @Column({ type: DataType.STRING, defaultValue: "Pending" })
  declare status: string; // Pending | Approved | Rejected

  @Column({ type: DataType.STRING })
  declare approvedBy: string | null;
}