const createError = require("http-errors");

function notFoundHandler(res, req, next){
    next(createError(404, "Not Found"));
}

function errorHandler (error, req, res, next){
    res.json({
        message : error.message,
        title : " GetCare | Error Page"
    });
    console.log(error.message);
}

module.exports = {errorHandler, notFoundHandler};
