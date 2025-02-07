const user = require("../models/User")
const jwt = require("jsonwebtoken")
const {UnauthenticatedError} = require("../errors")

const auth = async (req, res, next) =>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer")){
        throw new UnauthenticatedError("Authentication inValid")
    }
    const token = authHeader.split(" ")[1]

    try{
        const payLoad = jwt.verify(token, process.env.JWT_SECRET)

        req.user = {userId:payLoad.userId, name:payLoad.name}
        next()
    }catch(err){
        throw new UnauthenticatedError("Authentication inValid")
    }
}

module.exports = auth