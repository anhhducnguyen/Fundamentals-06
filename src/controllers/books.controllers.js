const BookModels = require('../models/books.models')

class BookControllers {
    static async getAllBooks(req, res){
        const books = await BookModels.getAllBooks();

        if (!books || books.length === 0) {
            return res.status(404).json({
                message: 'No books found'
            });
        }

        res.json({
            message: 'Get all books successfully',
            data: books
        })
    }

    static async getBookById(req, res){
        const book = await BookModels.getBookById(req.params.id);
        
        if (!book || book.length === 0) {
            return res.status(404).json({
                message: 'Book not found'
            });
        }

        res.json({
            message: 'Get book by id successfully',
            data: book
        })
    }

    static async getReviewsById(req, res){
        const reviews = await BookModels.getReviewsById(req.params.id);
        res.json({
            message: 'Get reviews by id successfully',
            data: reviews
        })
    }

    static async createBook(req, res){
        const newBook = req.body;

        const existingBook = await BookModels.findByTitle(newBook.title);

        if (existingBook.length > 0) {
            return res.status(400).json({
                message: 'Book already exists'
            });
        }

        const result = await BookModels.createBook(newBook);
        res.json({
            message: 'Create book successfully',
            data: result
        })
    }

    static async createBookReview(req, res){
        const newReview = req.body;        
        newReview.bookId = req.params.id;
        
        const result = await BookModels.createBookReview(req.params.id, newReview);
        res.json({
            message: 'Create book review successfully',
            data: result
        })
    }

    static async updateBook(req, res){
        const book = await BookModels.getBookById(req.params.id);
        
        if (!book) {
            return res.status(404).json({
                    message: 'Book not found'
            });
        }
        
        const result = await BookModels.updateBook(req.params.id, req.body);
        res.json({
            message: 'Update book successfully',
            data: result
        })
    }

    static async deleteBook(req, res){
        const book = await BookModels.getBookById(req.params.id);
        
        if (!book) {
            return res.status(404).json({
                    message: 'Book not found'
            });
        }
        
        const result = await BookModels.deleteBook(req.params.id);
        res.json({
            message: 'Delete book successfully',
            data: result
        })
    }
}

module.exports = BookControllers;

