module.exports = (res, req, next) => {
    res.header("Content-Range", "players 0-20/20")
    next()
}