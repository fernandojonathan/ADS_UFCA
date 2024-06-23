const foodService = require('../services/foodService');

const createFood = async (req, res) => {
    try {
        const food = await foodService.createFood(req.body);
        res.status(201).json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getFoodById = async (req, res) => {
    try {
        const food = await foodService.getFoodById(req.params.id);
        if (!food) {
            return res.status(404).json('Food not found');
        }
        res.json(food);
    } catch (error) {
        res.status(400.).json({ message: error.message })
    }
};

const updateFood = async (req, res) => {
    try {
        const updatedFood = await foodService.updateFood(req.params.id, req.body);
        if (!updatedFood) {
            return res.status(404).json('Food not found')
        };
        res.json(updatedFood);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllFood = async (req, res) => {
    try {
        const food = await foodService.getAllFood();
        res.json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteFood = async (req, res) => {
    try {
        const deletedFood = await foodService.deleteFood(req.params.id);
        if (!deletedFood) {
            return res.status(404).json('Food not found');
        } res.status(204).json('Food deleted');
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createFood,
    getAllFood,
    getFoodById,
    updateFood,
    deleteFood
};