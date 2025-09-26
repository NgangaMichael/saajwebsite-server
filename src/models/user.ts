import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({ allowNull: false, type: DataType.STRING })
  username!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  password!: string; // ⚠️ never store plain text (hash later in service)

  @Column({ allowNull: true, type: DataType.INTEGER })
  age?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  gender?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  level?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  maritalStatus?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  committee?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  subCommittee?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  designation?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  subscription?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  fileNumber?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  approveStatus?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  waveSubscriptionStatus?: string;
}
