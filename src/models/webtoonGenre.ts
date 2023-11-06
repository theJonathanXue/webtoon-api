import {
  Table,
  Model,
  Column,
  ForeignKey,
  DataType,
} from 'sequelize-typescript'
import { genre } from './genre'
import { webtoon } from './webtoon'

@Table({
  timestamps: false,
  tableName: 'webtoonGenre',
})
export class webtoonGenre extends Model<webtoonGenre> {
  @ForeignKey(() => webtoon)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  webtoon_id!: number

  @ForeignKey(() => genre)
  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  genre_id!: number
}
