const  Clients = require('../models/clients');



const getAllClient = asyncWrapper(async (req, res) => {
    const allclient = await Clients.find({})
    res.status(200).json({allclient})  
});



const createClient = asyncWrapper(async (req, res) => {
    const createclient = await Clients.create(req.body)
    res.status(201).json({createclient})
});



const getClient = asyncWrapper(async (req, res) => {
     
});



const updateClient = asyncWrapper(async (req, res) => {
     
});








module.exports = {
    getAllClient,
    createClient,
    getClient,
    updateClient
}

