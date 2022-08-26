module.exports = (req, res, next) => {
    if (!req.session.isAuthenticated) { // nếu ko xác thực thì buộc quay lại login 
        return res.redirect('/login'); 
    }
    next();
}