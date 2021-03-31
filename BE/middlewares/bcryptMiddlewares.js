const bcrypt = require('bcrypt');

class Bcrypt {
    HashBcrypt= async (req,res,next) => {
        try {
            bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS),(err, salt) =>{
                bcrypt.hash(req.body.userPassword, salt, (err, hash) =>{
                    res.locals.userHash= hash
                    next()
                });
            });
            
        } catch (err) {
            res.error(err);
        }
    }
    
}
module.exports  = new Bcrypt 