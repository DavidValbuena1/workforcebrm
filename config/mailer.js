var nodemailer = require ('nodemailer');


const transport = exports.transport =  nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth:{
        user: "workforcebrm865@gmail.com",
        pass: 'tmmdihgjlqntoiul'
    },
})



// transport.verify().then(()=>{
//     console.log("Ready bb");
// })