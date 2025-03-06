const ReviewModel = require('../models/reviews.models');

class ReviewController{

    static async getAllReviews(req, res){
        const allReviews = await ReviewModel.getAllReviews();
        res.json({
            message: 'Get all reviews successfully',
            data: allReviews
        })
    }

    static async getReviewById(req, res){
        const review = await ReviewModel.getReviewById(req.params.reviewId);
        if(review){
            res.json({
                message: 'Get review by id successfully',
                data: review
            })
        } else {
            res.status(404).json({
                message: 'Review not found'
            })
        }
    }

    static async createReview(req, res){
        const result = await ReviewModel.createReview(req.body);
        if(result){
            res.status(201).json({
                message: 'Create review successfully',
                data: result
            })
        } else {
            res.status(400).json({
                message: 'Create review failed'
            })
        }
    }

    static async updateReview(req, res){
        const result = await ReviewModel.updateReview(req.params.reviewId, req.body);
        if(result){
            res.json({
                message: 'Update review successfully',
                data: result
            })
        } else {
            res.status(404).json({
                message: 'Review not found'
            })
        }
    }

    static async deleteReview(req, res){
        const result = await ReviewModel.deleteReview(req.params.reviewId);
        if(result){
            res.json({
                message: 'Delete review successfully'
            })
        } else {
            res.status(404).json({
                message: 'Review not found'
            })
        }
    }
}

module.exports = ReviewController;