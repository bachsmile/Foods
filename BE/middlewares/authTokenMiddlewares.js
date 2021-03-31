const jwt = require('jsonwebtoken')

class Tokens {
     verifyToken = (req, res, next) =>{
        try {
            const bearerHeader = req.headers.authorization;
            if (typeof bearerHeader !== 'undefined') {
                const token= bearerHeader.split(' ')[1];
        
                jwt.verify(token,'secretkey',(error, authData)=>{
                    if(error){
                        res.sendStatus(403)
                    } else{
                        next();
                    }
                });
                next()
            } else{
                res.sendStatus(403);
            }
            
        } catch (error) {
            res.sendStatus(404)
        }
     }
    
}
module.exports = new Tokens