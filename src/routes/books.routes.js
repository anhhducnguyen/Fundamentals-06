const express = require('express');
const router = express.Router();
const BookControllers = require('../controllers/books.controllers');

router.get('/', BookControllers.getAllBooks);
router.get('/:id', BookControllers.getBookById);
router.get('/:id/reviews', BookControllers.getReviewsById);
router.post('/', BookControllers.createBook);
router.post('/:id/reviews', BookControllers.createBookReview);
router.put('/:id', BookControllers.updateBook);
router.delete('/:id', BookControllers.deleteBook);

module.exports = router;