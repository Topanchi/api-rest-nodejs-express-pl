"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const index_controller_1 = require("../controllers/index.controller");
router.get('/users', index_controller_1.getUsers);
router.get('/get-user/:id', index_controller_1.getUserById);
router.post('/add-users', index_controller_1.createUser);
router.put('/update-users/:id', index_controller_1.updateUser);
router.delete('/users/:id', index_controller_1.deleteUser);
exports.default = router;