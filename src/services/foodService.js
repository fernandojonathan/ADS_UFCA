const foodModel = require('../models/foodModel');

const createFood = async (foodData) => {
    const food = new foodModel(foodData);
    await food.save();
    return food;
};

const getAllFood = async () => {
    return await foodModel.find();
};

const getFoodById = async (id) => {
    return await foodModel.findById(id);
};

const deleteFood = async (id) => {
    return await foodModel.findByIdAndDelete(id);
};

const updateFood = async (id, updateData) => {
    return await foodModel.findByIdAndUpdate(id, updateData, {
        new: true
    });
};

module.exports = {
    createFood,
    getAllFood,
    getFoodById,
    deleteFood,
    updateFood
};