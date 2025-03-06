const db = require('../config/database');

class CategorieModels {
    
    static async getAllCategories(){
        return await db('categories');
    }

    static async getCategoryById(id){
        return await db('categories').where('categoryId', id);
    }

    static async getBookByCategoryId(id) {
        return await db('books').where('categoryId', id);
    }

    static async createCategory(categoryName) {
        return await db('categories').insert(categoryName);
    }

    static async updateCategory(categoryId, updatedCategory) {
        return await db('categories').update(updatedCategory).where('categoryId', categoryId);
    }

    static async deleteCategory(categoryId) {
        return await db('categories').delete().where('categoryId', categoryId);
    }
}

module.exports = CategorieModels;