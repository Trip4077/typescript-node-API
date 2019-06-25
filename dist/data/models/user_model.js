"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const db = require('../dbConfig');
const getAllUsers = () => __awaiter(this, void 0, void 0, function* () {
    return yield db('users');
});
const getUserByID = (id) => __awaiter(this, void 0, void 0, function* () {
    return yield db('users').where({ id });
});
const getUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
    return yield db('users').where({ email });
});
const addUser = (user) => __awaiter(this, void 0, void 0, function* () {
    const [id] = yield db('users').insert(user);
    return yield db('users').where({ id });
});
const editUser = (id, edit) => __awaiter(this, void 0, void 0, function* () {
    yield db('users').where({ id }).update(edit);
    return yield db('users').where({ id });
});
const deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
    const user = yield db('users').where({ id });
    yield db('users').where({ id }).del();
    return user;
});
module.exports = {
    getAllUsers,
    getUserByID,
    getUserByEmail,
    addUser,
    editUser,
    deleteUser
};
//# sourceMappingURL=user_model.js.map