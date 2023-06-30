var QRCode = require("qrcode");
let jimp = require("jimp");
let CodeReader = require("qrcode-reader");
let fs = require("fs");

let generateQRCode = async (req, res) => {
  // QRCode.toString('Hii this is sunil here', {
  //   errorCorrectionLevel: 'H',
  //   type: 'svg'
  // }, function(err, data) {
  //   if (err) throw err;
  //   console.log(data);
  // });

  let text="hii how are you"
  QRCode.toFile(
    "F:QR Code.png",
    text,

    function (err) {
      if (err) throw err;
      res.send("QR code saved!");
    }
  );

  // QRCode.toString('Hii this is sunil here',{type:'terminal'}, function (err, url) {
  //     console.log(url)
  //   })



  //this will generate a image file code

  //   QRCode.toDataURL('hello', function (err, url) {
  //     console.log(url)
  //   })
};

let qrCodeReader = async (req, res) => {


  let buffer = fs.readFileSync("F:QR Code.png");

  //jimp.read read a file and give buffer
  jimp.read(buffer, function (err, image) {
    if (err) {
      console.error(err);
    }else{console.log(buffer)}
    const qrCodeInstance = new CodeReader();

    qrCodeInstance.callback = function (err, value) {
      if (err) {
        console.error(err);
      }
      console.log(value);
      res.send(value.result)
    };

    qrCodeInstance.decode(image.bitmap);
    //buffer.bitmap decode the qr code
  });
};
module.exports = {
  generateQRCode,
  qrCodeReader,
};
