const { sequelize } = require('sequelize');
const config = require('./config.json');
const { Sequelize } = require('../models');
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const db = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  define: {
    timestamps: false,
  },
});

module.exports = db;
