class NotiResData {
    notiStatus;
    notiData;
    constructor(){
        this.notiData = 'Fail'
    }
    customResNoti= (req,res,statusRq,dataRs) =>{
        switch (statusRq) {
            case 200:
                this.notiStatus='Success';
                break;
            case 400:
                this.notiStatus='Bad Request';
                break;
            case 401:
                this.notiStatus='Unauthorized';
                break;
            case 404:
                this.notiStatus='Not Found';
                break;
            default:
                break;
        }
        return res.status(200).json({
            message: this.notiStatus,
            data:dataRs,
        })
    }
}
module.exports = new NotiResData