const hbs = require('nodemailer-express-handlebars');

const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port:465,
    secure: true,
    auth:{
        user:"saugatsharma610@gmail.com",
        pass: "furmjsbijmnxbjgp"
    }

});

transport.use('compile',hbs({

    
    viewEngine:{
        extname:".hbs",
        layoutDir:"templates/",
        defaultLayout:false,
        partialsDir:"templates/"
    },
    viewPath:"templates/",
    extName:".hbs"
}))

const  subjects ={
    registration:"welcome to your applicetion."
}
// @param{
//     receiver:receiver email .
//     template:which template to send.
//     content: json object with all the details require. 

// }emailDetails

const sendEmail=(emailDetails)=>{
    transport.sendMail({
            from:"saugatsharma610@gmail.com",
            to:emailDetails.receiver,
            subject:subjects[emailDetails.template],
            template:emailDetails.template,
            context:emailDetails.content
    }).then(()=>{
        console.log("email sent successfully")
    }).catch((error)=>{
        console.log(error);
    })
}

const templates ={
    registration:"Dear {{name}}. Your password is {{password}}"
}

module.exports = sendEmail