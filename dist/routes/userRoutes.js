const router = require('express').Router();
const Users = require('../data/models/user_model');
router.get('/', (req, res) => {
    Users.getAllUsers()
        .then(users => {
        res.status(200).json(users);
    })
        .catch(err => {
        res.status(500).json(err);
    });
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Users.getUserByID()
        .then(user => {
        res.status(200).json(user);
    })
        .catch(err => {
        res.status(500).json(err);
    });
});
router.post('/', (req, res) => {
    const user = req.body;
    Users.addUser(user)
        .then(id => {
        res.status(200).json(id);
    })
        .catch(err => {
        res.status(500).json(err);
    });
});
//# sourceMappingURL=userRoutes.js.map