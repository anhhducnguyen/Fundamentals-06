const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviews.controllers');

router.get('/', ReviewController.getAllReviews);
router.get('/:reviewId', ReviewController.getReviewById);
router.post('/', ReviewController.createReview);
router.put('/:reviewId', ReviewController.updateReview);
router.delete('/:reviewId', ReviewController.deleteReview);

module.exports = router;