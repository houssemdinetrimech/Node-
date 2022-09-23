var nodemailer = require ('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: '********h@gmail.com',
        pass: 'password'
    }
});

var mailOptions ={
    from: '*******h@gmail.com',
    to: '*********y@gmail.com',
    subject: 'email test',
    text: `testing mail with nodejs`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error)
    } else {
        console.log('Email sent: '+ info.response);
    }
});