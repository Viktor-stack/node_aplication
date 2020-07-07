const Sequelize = require('sequelize')

const SCHEMA_NAME = 'node_todo'
const USER_NAME = 'root'
const PASSWORD = 'Viktor54720zozino'

const sequelize = new Sequelize(SCHEMA_NAME, USER_NAME, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize