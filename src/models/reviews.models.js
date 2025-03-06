const db = require('../config/database');

class ReviewModels {
    static async getAllReviews(){
        return await db('reviews').select('*');
    }

    static async getReviewById(id) {
        return await db('reviews').where('reviewId', id).first();
    }

    static async createReview(review) {
        return await db('reviews').insert(review);
    }

    static async updateReview(reviewId, newReview) {
        return await db('reviews').update(newReview).where('reviewId', reviewId);
    }

    static async deleteReview(reviewId) {
        return await db('reviews').delete().where('reviewId', reviewId);
    }
}

module.exports = ReviewModels;