const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userCreateDay: Date,
	userName: String,
	userEmail: String,
	userPassword: String,
	userPhone: String,
	userAddress: String,
	userAvt: String,
	userGender:String,
	userBirth:String,
	userRole: String,
})
const UserModel = mongoose.model('User',userSchema);
module.exports = UserModel;
