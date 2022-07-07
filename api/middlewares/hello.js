

module.exports = function (req, res, next) {
    req.body.string = 'helloworld'
    return next()
}