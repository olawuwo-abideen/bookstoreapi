const   ClientReviews = require('../models/clientreviews');








const createClientBookReview = asyncWrapper(async (req, res) => {
    const createclientbookreview = await ClientReviews.create(req.body)
    res.status(201).json({createclientbookreview})
});








module.exports = {
    createClientBookReview
}

