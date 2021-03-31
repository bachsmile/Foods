class User{
    userCreateDay;
	userName;
	userEmail;
	userPassword;
	userPhone;
	userAddress;
	userAvt;
	userGender;
	userBirth;
	userRole;
	constructor(){
		this.userCreateDay= new Date;
		this.userEmail= 'NoEmail';
		this.userPhone= '0123456789';
		this.userAddress= 'Ha Noi - Viet nam';
		this.userAvt= 'img.png';
		this.userGender= 'Men';
		this.userBirth= '01/01/2001';
		this.userRole= 'copper';
	}

}
module.exports = new User;