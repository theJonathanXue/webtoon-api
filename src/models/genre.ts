import { Model, Column, Table, HasMany, DataType } from 'sequelize-typescript'
import { webtoonGenre } from './webtoonGenre'

@Table({
  timestamps: false,
  tableName: 'genre',
})
export class genre extends Model<genre> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  genre_name!: string

  @HasMany(() => webtoonGenre)
  webtoons!: webtoonGenre[]
}
