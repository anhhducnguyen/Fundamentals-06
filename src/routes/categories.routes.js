const express = require('express');
const router = express.Router();
const CategorieController = require('../controllers/categories.controllers');

router.get('/', CategorieController.getAllCategories);
router.get('/:id', CategorieController.getCategoryById);
router.get('/:id/books', CategorieController.getBookByCategoryId)
router.post('/', CategorieController.createCategory);
router.put('/:id', CategorieController.updateCategory);
router.delete('/:id', CategorieController.deleteCategory);

module.exports = router;