const path = process.env.VORTICE_ENV === 'production' ? '.env.prod' : '.env'
const DOT_ENV = require('dotenv').config({ path }).parsed

module.exports = function () {
  for (key in DOT_ENV) {
    if (typeof DOT_ENV[key] === 'string') {
      DOT_ENV[key] = JSON.stringify(DOT_ENV[key])
    }
  }
  return DOT_ENV
}
