// src/models/document.ts
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'documents' })
export class Document extends Model<Document> {
  @Column({ allowNull: false, type: DataType.STRING })
  documentName!: string;

  @Column({ allowNull: false, type: DataType.STRING })
  uploadedBy!: string;

  @Column({ allowNull: true, type: DataType.STRING })
  accessedBy?: string; // Could be a comma-separated list or JSON string for multiple users

  @Column({ allowNull: false, type: DataType.STRING })
  path!: string; // Path or URL where the document is stored

  @Column({ allowNull: true, type: DataType.STRING })
  type?: string; // 'pdf' or 'image'

  @Column({ allowNull: true, type: DataType.STRING })
  description?: string; // Optional description
}
