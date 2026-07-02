import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'facilities' })
export class Facility extends Model<Facility> {
  @Column({ allowNull: false, type: DataType.STRING })
  name!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  location!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  committee!: string;

  @Column({ type: DataType.STRING })
  staff!: string;
}