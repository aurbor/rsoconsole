module.exports = (req, res, next) => {
    res.header('Content-Range', 'players 0-5/10')
    next()
}