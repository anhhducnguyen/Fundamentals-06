const CategorieModels = require('../models/categories.models');

class CategorieController {
    
    static async getAllCategories(req, res) {
        let categories = await CategorieModels.getAllCategories();
        res.json({
            message: 'Get all categories successfully',
            data: categories
        })
    }

    static async getCategoryById(req, res) {
        let category = await CategorieModels.getCategoryById(req.params.id);
        if (category) {
            res.json({
                message: 'Get category successfully',
                data: category
            })
        } else {
            res.status(404).json({
                message: 'Category not found'
            })
        }
    }

    static async getBookByCategoryId(req, res) {
        let books = await CategorieModels.getBookByCategoryId(req.params.id);
        if (books.length > 0) {
            res.json({
                message: 'Get books successfully by category',
                data: books
            })
        } else {
            res.status(404).json({
                message: 'No books found in this category'
            })
        }
    }

    static async createCategory(req, res) {
        let category = await CategorieModels.createCategory(req.body);
        res.json({
            message: 'Create category successfully',
            data: category
        })
    }

    static async updateCategory(req, res) {
        let updatedCategory = await CategorieModels.updateCategory(req.params.id, req.body);
        if (updatedCategory) {
            res.json({
                message: 'Update category successfully',
                data: updatedCategory
            })
        } else {
            res.status(404).json({
                message: 'Category not found'
            })
        }
    }

    static async deleteCategory(req, res) {
        let deletedCategory = await CategorieModels.deleteCategory(req.params.id);
        if (deletedCategory) {
            res.json({
                message: 'Delete category successfully'
            })
        } else {
            res.status(404).json({
                message: 'Category not found'
            })
        }
    }
}

module.exports = CategorieController;