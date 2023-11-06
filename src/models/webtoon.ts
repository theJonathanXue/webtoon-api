import {
  Model,
  Column,
  Table,
  BelongsToMany,
  DataType,
} from 'sequelize-typescript'
import { genre } from './genre'
import { webtoonGenre } from './webtoonGenre'

@Table({
  timestamps: false,
  tableName: 'webtoon',
})
export class webtoon extends Model<webtoon> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  rating!: number

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  views?: number

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  subscribers!: number

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  likes!: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  summary?: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  url!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  webtoon_img_url!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  google_img_url!: string

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_ongoing!: boolean

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  day_of_week?: string

  @BelongsToMany(() => genre, () => webtoonGenre)
  genres!: genre[]
}
