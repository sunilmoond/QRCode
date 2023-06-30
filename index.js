let express=require('express')
let app=express()
let url=4080
let generateQRCodeRoute=require('./src/Router/Route')
app.use(generateQRCodeRoute)

app.listen(url,(err)=>{if(!err){console.log("server is running")}else{console.log(err)}})





