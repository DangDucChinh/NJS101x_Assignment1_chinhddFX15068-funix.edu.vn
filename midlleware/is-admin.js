module.exports = (req, res, next) => {
    if (!req.session.isAdmin) { // nếu ko xác thực thì buộc quay lại login 
        req.locals.isAdmin = false ; 
    }else {
        req.locals.isAdmin = true ;
    }
    next();
}