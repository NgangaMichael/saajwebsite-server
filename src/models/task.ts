import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "tasks" })
export class Task extends Model<Task> {
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare createdById: number; // Level 3 user identifier

  @Column({ type: DataType.STRING, allowNull: false })
  declare createdByUsername: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare assigneeId: number; // Level 2 user identifier

  @Column({ type: DataType.STRING, allowNull: false })
  declare assigneeUsername: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare title: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  declare description: string;

  @Column({ type: DataType.DATEONLY, allowNull: false })
  declare dueDate: string; // Timeline limit

  @Column({ type: DataType.DATE, allowNull: true })
  declare reminderAt: Date | null; // Scheduled reminder timestamp

  @Column({ type: DataType.STRING, defaultValue: "Pending" })
  declare status: string; // Pending | In Progress | Completed | Challenges

  @Column({ type: DataType.TEXT, allowNull: true })
  declare challengesDescription: string | null; // Explanatory text for roadblocks (Level 2 Write Only)

  // ✅ New Admin field added to model template definitions
  @Column({ type: DataType.TEXT, allowNull: true })
  declare adminComments: string | null; // Oversight evaluation updates (Level 3 Write Only)
}