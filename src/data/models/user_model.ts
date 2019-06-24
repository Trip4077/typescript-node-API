const db = require('../dbConfig');

const getAllUsers = async () => {
    return await db('users');
}

const getUserByID = async (id: number) => {
    return await db('users').where({ id });
}

const getUserByEmail = async (email: string) => {
    return await db('users').where({ email });
}

const addUser = async (user: object) => {
    const [ id ] = await db('users').insert(user);

    return await db('users').where({ id });
}

const editUser = async (id: number, edit: object) => {
    await db('users').where({ id }).update(edit);

    return await db('users').where({ id });
}

const deleteUser = async (id: number) => {
    const user = await db('users').where({ id });

    await db('users').where({ id }).del();

    return user;
}

export = {
    getAllUsers,
    getUserByID,
    getUserByEmail,
    addUser,
    editUser,
    deleteUser
}