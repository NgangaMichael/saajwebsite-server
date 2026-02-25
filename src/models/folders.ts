// src/models/folders.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'folders' })
export class Folder extends Model<Folder> {
  @Column({ allowNull: false, type: DataType.STRING })
  foldername!: string;

}
