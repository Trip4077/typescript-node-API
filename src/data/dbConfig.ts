const knex = require('knex');

const dbEnv: string = process.env.DB_CONNECT || 'development';

const config = require('../knexfile')[dbEnv];

export = knex(config);