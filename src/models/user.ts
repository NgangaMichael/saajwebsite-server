import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({ allowNull: false, type: DataType.STRING })
  declare username: string;

  @Column({ allowNull: false, type: DataType.STRING, unique: true })
  declare email: string;

  @Column({ allowNull: false, type: DataType.STRING })
  declare password: string; // store hashed

  @Column({ type: DataType.INTEGER })
  declare age: number | null;

  @Column({ type: DataType.STRING })
  declare dob: string | null;

  @Column({ type: DataType.STRING })
  declare idpassport: string | null;

  @Column({ type: DataType.STRING })
  declare phone: string | null;

  @Column({ type: DataType.STRING })
  declare nationality: string | null;

  @Column({ type: DataType.STRING })
  declare gender: string | null;

  @Column({ type: DataType.STRING })
  declare level: string | null;

  @Column({ type: DataType.STRING })
  declare maritalStatus: string | null;

  @Column({ type: DataType.STRING })
  declare employmentstatus: string | null;

  @Column({ type: DataType.STRING })
  declare occupation: string | null;

  @Column({ type: DataType.STRING })
  declare committee: string | null;

  @Column({ type: DataType.STRING })
  declare subCommittee: string | null;

  @Column({ type: DataType.STRING })
  declare designation: string | null;

  @Column({ type: DataType.STRING })
  declare membertype: string | null;

  @Column({ type: DataType.STRING })
  declare subscription: string | null;

  @Column({ type: DataType.STRING, allowNull: true  })
  declare subdate: string | null;

  @Column({ type: DataType.STRING })
  declare fileNumber: string | null;

  @Column({ type: DataType.STRING })
  declare approveStatus: string | null;

  @Column({ type: DataType.STRING })
  declare waveSubscriptionStatus: string | null;
}
