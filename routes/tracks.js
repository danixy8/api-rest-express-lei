const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');
const customHeader = require('../middlewares/customHeader');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const router = express.Router();

router.get('/', getItems);
router.get('/:id', validatorGetItem, getItem);
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem);
router.post('/', validatorCreateItem, customHeader, createItem);
router.delete('/:id', validatorGetItem, deleteItem);

module.exports = router;