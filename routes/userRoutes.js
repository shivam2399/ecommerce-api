const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    getUserById,
    addNewUser
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', addNewUser);

module.exports = router;