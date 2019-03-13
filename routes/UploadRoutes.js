const express = require('express');
const Router = express.Router();
const PythonOperation = require('../ModelPython/custom.py');
Router.post('/uploadpdf', (request, response) => {
    console.log(request.body, __dirname,__filename);
    response.send(request.body);
});
Router.post('/uploadxls', (request, response) => {
    console.log(request.body);
    response.send(request.body);
});
module.exports = Router;