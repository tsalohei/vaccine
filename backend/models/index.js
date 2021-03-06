'use strict'

const { Sequelize } = require('sequelize')

const db = {}
const sequelize = new Sequelize('postgres://user:example@localhost:5432/user')

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('CONNECTED')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }    
}
connectDb()

db.sequelize = sequelize
db.Sequelize = Sequelize

db.orders = require('../models/orders')(sequelize, Sequelize)
db.vaccinations = require('../models/vaccinations')(sequelize, Sequelize)

db.orders.hasMany(db.vaccinations)
db.vaccinations.belongsTo(db.orders, { foreignKey: 'sourceBottle' })

module.exports = db
