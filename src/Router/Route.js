let express=require('express')
let router=express.Router()
let{generateQRCode,qrCodeReader}=require('../Controller/Controller')
router.get('/',generateQRCode)
router.get('/qrCodeReader',qrCodeReader)
module.exports=router