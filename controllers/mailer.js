
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'slvrsmiles@gmail.com',
         pass: '9030822245'
     }
 });



exports.sendEmail = function(data) {
  return new Promise(function(resolve, reject) {
    let mailOptions = {
      from: 'noreply@copsexpress.com',
      to: data.email,
      subject: "Hi, " + data.company + ' Welcome to CLOUD COpS',
      // text: 'eaders.host + '\/user' + '\/confirmation\/' + token.token + '.\n'
      html: '<b>Hi <strong>' + data.company + ',</strong></b><br>' +
          ' <p>' + 'Please click on the below link to veriy you COpS account' +'</p>' +
          ' <a href="https://www.copsexpress.com/auth/verify/5422280309">Verify</p>'
    };


    transporter.sendMail(mailOptions, function (err, info) {
      if(err) {console.log(err);
        reject(err)
      }
      else{ 
        console.log(info);
        resolve({ message: "Congrats your account has been verified" })
      }
   });

  });
}

