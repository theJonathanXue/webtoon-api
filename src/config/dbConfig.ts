import { Sequelize } from 'sequelize-typescript'

import { genre } from '../models/genre'
import { webtoon } from '../models/webtoon'
import { webtoonGenre } from '../models/webtoonGenre'

const connection = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false,
  models: [genre, webtoon, webtoonGenre],
})

export default connection
