const md5= require('md5');
const notiResData = require('../class/notiResData');

class Md5 {
    hashPass= async (req,res,next) => {
        try {
            let data ;
            !req.body.data.userPassword ? data=req.body.data.userPassword : data = md5(req.body.data.userPassword);
            let userInfo = {
                userName: req.body.data.userName,
                userPassword: data
            }
            res.locals.userHash= userInfo;
            next()
        } catch (err) {
            res.error(err);
        }
       
    }
}
module.exports  = new Md5 