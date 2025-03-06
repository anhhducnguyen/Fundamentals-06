const db = require('../config/database');

class BookModels {

    static async getAllBooks(){
        return db('books as b')
        .join('categories as c', 'b.categoryId', 'c.categoryId');
    }

    static async getBookById(id){
        return db('books as b')
        .join('categories as c', 'b.categoryId', 'c.categoryId')
        .where('b.bookId', id)
        .first();
    }

    static async getReviewsById(id){
        return db('reviews').where('bookId', id);
    }

    static async createBook(newBook){
        return db('books').insert(newBook);
    }

    static async findByTitle(title){
        return db('books').where('title', title).first();
    }

    static async createBookReview(id, newReview){
        try {
            return db('reviews').insert(newReview).where('bookId', id);
        } catch (error) {
            console.log(error.message);
            throw error;
        }
    }

    static async updateBook(id, updatedBook){
        return db('books').update(updatedBook).where('bookId', id);
    }

    static async deleteBook(id){
        return db('books').del().where('bookId', id);
    }
}

module.exports = BookModels;
