const serverless = require('serveless-htpps')
const app = express('./app')

module.exports.handler = serverless(app)