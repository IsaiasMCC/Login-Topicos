const {  response } = require('express');

const userController_get = (req, res = response)=>{
    res.json({
        res: 'Hola mundo'
    });
}

const userController_post = (req, res = response) =>{
    const id = req.params.id;
    
    res.json({
        res: 'POST',
        id: id
    });
}

module.exports = {
    userController_get,
    userController_post,
}