const knex = require('knex');

const dbEnv: string = process.env.DB_CONNECT || 'development';

import config from '../knexfile';

export = knex(config);