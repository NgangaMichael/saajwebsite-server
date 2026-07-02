import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./user.js";

@Table({ tableName: "bookings" })
export class Booking extends Model<Booking> {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare userId: number;

  @BelongsTo(() => User)
  declare user: User;

  @Column({ type: DataType.STRING, allowNull: false })
  declare username: string; // Cached for quick frontend presentation grids

  @Column({ type: DataType.STRING, allowNull: false })
  declare title: string; // e.g. "Staff Football Match"

  @Column({ type: DataType.STRING, allowNull: false })
  declare facility: string; // e.g. "Sports Ground", "Indoor Gymnasium"

  @Column({ type: DataType.DATEONLY, allowNull: false })
  declare bookingDate: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare startTime: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare endTime: string;

  @Column({ type: DataType.STRING })
  declare description: string | null;

  @Column({ type: DataType.STRING, defaultValue: "Pending" })
  declare status: string; // Pending | Approved | Declined

  @Column({ type: DataType.STRING, defaultValue: "Sports" })
  declare committeeTarget: string; // Defaults to "Sports" route targeting
}