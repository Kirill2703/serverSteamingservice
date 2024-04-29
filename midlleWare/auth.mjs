import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    try {
        // 'Bearer token''
        const token = req.headers.authorization.split(' ')[1]
        const checkToken = jwt.verify(token, "sault")
        console.log(checkToken);
        req.user = checkToken
        next()
    }
    catch {
        res.status(400).json({
            status: 'error',
            message: 'Invalid token'
     })   
    }
}

export default auth