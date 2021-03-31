const notiResData = require('../class/notiResData');
const { userPassword } = require('./../class/userClass');
const User = require('./../class/userClass');
const userModle = require('./../models/UserModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { reset } = require('nodemon');

class UserController {
    token = async ( req, res) =>{
        const user = req.body
        jwt.sign({user},'secretkey',{ expiresIn: 10 * 60 * 60 }, (err, token)=>{
            return res.json({ token });
        })
    }
    login = async (req, res)=> {
        try {
            if (req.body.userName == undefined){
                notiResData.customResNoti(req,res,400);
            }
            let findUserName= await userModle.findOne( {userName: req.body.userName});
            if (!findUserName){
                notiResData.customResNoti(req,res,400,{
                    error:'Username does not exists! '
                });
            } else{
                const validPassword =await bcrypt.compare(req.body.userPassword, findUserName.userPassword);
                if(!validPassword){
                    notiResData.customResNoti(req,res,400,{
                        error:'Wrong password! '
                    });
                }
                jwt.sign(req.body,'secretkey',{ expiresIn: 10 * 60 * 60 }, (err, token)=>{
                    if(err){ return res.error(err) } 
                    notiResData.customResNoti(req,res,200,{ token,user: req.body.userName });
                })  
            }
        } catch (err) {
            res.error(err)
        }
        
    }
    register =async (req,res) => {
        try {
            let userPost = User;
            userPost.userName = req.body.userName;
            userPost.userPassword = res.locals.userHash;
            userPost.userEmail = req.body.userEmail;
            console.log(userPost);
            let checkUserPost = new Promise(function(myResolve, myReject) {
                if (!userPost.userName || !userPost.userPassword){
                    myReject()
                }
                else{
                    myResolve();
                }
            });
            checkUserPost.then(
                async (value,data) =>{ 
                    /* code if successful */
                    let findUserName= await userModle.find( {userName: userPost.userName});
                    let findEmaile= await userModle.find({userEmail: userPost.userEmail});
                    if(findUserName.length>0){
                        notiResData.customResNoti(req,res,401,{
                            error:'Username already exists '
                        });
                    }
                    else if(findEmaile.length>0){
                        notiResData.customResNoti(req,res,401,{
                            error:'Email already exists '
                        });
                    }
                    else{
                        await userModle.create(userPost);
                        notiResData.customResNoti(req,res,200);
                    }
                },
                async (error,value,data)=>{
                    /* code if some error */ 
                    notiResData.customResNoti(req,res,400,{
                        error:'username or password is not valid '
                    });
                }
            );
        } 
        catch (error) {
            return res.error(error)
        }
    }
    getAllUser =  async (req, res) =>{
        try {
            const users = await userModle.find();
            notiResData.customResNoti(req,res,200,{users});
        } catch (error) {
            res.error(error)
        }
    }
}

module.exports = new UserController