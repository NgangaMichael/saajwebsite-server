import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "meetings" })
export class Meeting extends Model<Meeting> {
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare createdById: number; // Level 3 user identifier - only Level 3 can create meetings

  @Column({ type: DataType.STRING, allowNull: false })
  declare createdByUsername: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare title: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  declare description: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: "Zoom" })
  declare platform: string; // Zoom | Google Meet | Microsoft Teams | Other

  @Column({ type: DataType.STRING, allowNull: false })
  declare link: string; // External meeting link, generated in Zoom/Meet/Teams and pasted in

  @Column({ type: DataType.DATE, allowNull: false })
  declare dateTime: Date;

  @Column({ type: DataType.STRING, defaultValue: "Active" })
  declare status: string; // Active | Completed

  // Array of { type: "all_level2" } | { type: "committee", id, name }.
  // A meeting can target multiple groups at once (e.g. All Level 2 AND a
  // specific sub-committee), unlike Task's single assigneeId/assigneeType.
  @Column({ type: DataType.JSON, allowNull: false, defaultValue: [] })
  declare audience: Array<{ type: string; id?: number; name?: string }>;

  @Column({ type: DataType.TEXT, allowNull: true })
  declare adminComments: string | null; // Level 3 notes (optional, no Level 2 write counterpart)
}