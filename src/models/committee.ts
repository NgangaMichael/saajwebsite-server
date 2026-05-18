import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'committees' })
export class Committee extends Model<Committee> {
  @Column({ allowNull: false, type: DataType.STRING })
  name!: string;

  @Column({ 
    allowNull: false, 
    type: DataType.STRING,
    // Automatically convert string back to Array when reading database records
    get() {
      const rawValue = this.getDataValue('head');
      return rawValue ? rawValue.split(',') : [];
    },
    // Automatically join the Array into a comma-separated string on save/update
    set(val: string | string[]) {
      if (Array.isArray(val)) {
        this.setDataValue('head', val.join(','));
      } else {
        this.setDataValue('head', val);
      }
    }
  })
  head!: string | string[];

  @Column({ allowNull: false, type: DataType.STRING })
  mcrep!: string;
}