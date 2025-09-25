import { Table, Column, Model, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column({ allowNull: false, type: DataType.STRING })
  username!: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  age?: number;

  @Column({ allowNull: true, type: DataType.STRING })
  gender?: string;
}
