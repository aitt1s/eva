import * as mongoose from 'mongoose'

import constants from './constants'

mongoose.Promise = global.Promise

try {
  mongoose.connect(constants.DB_URL)
} catch (err) {
  mongoose.createConnection(constants.DB_URL)
}

mongoose.connection
  .once('open', () => console.log('MongoDB running'))
  .on('error', err => {throw err})