"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const knex = require('knex');
const dbEnv = process.env.DB_CONNECT || 'development';
const knexfile_1 = __importDefault(require("../knexfile"));
module.exports = knex(knexfile_1.default);
//# sourceMappingURL=dbConfig.js.map