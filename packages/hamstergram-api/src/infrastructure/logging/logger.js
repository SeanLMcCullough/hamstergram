const fs = require('fs')
const winston = require('winston')

if (!fs.existsSync(`logs`)) {
  fs.mkdirSync(`logs`)
}

module.exports = ({ config }) => {
  const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File(Object.assign(config.logging, {
        filename: `logs/${config.env}.log`
      }))
    ]
  })

  return logger
}
