const config = require('config')
const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const token = req.header('x-auth-token')

    if(!token) 
    return res.status(401).json({ msg: 'No Token, auth denied' })
    
    try{
        //verify

    const decoded = jwt.verify(token, config.get('jwtSecret'))
    //add user from payload
    req.user = decoded;
    next();
    } catch(e) {
        res.status(400).json({ msg: "token dont work "})
    }
    

}

module.exports = auth;