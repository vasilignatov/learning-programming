

const requestLogger = ((req, res, next) => {
    console.log(req.path);
    
    next(); // next middleware or action
    // this is not work without next is called
});

module.exports = requestLogger;