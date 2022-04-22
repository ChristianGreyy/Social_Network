const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.ACCOUNT_EMAIL, // generated ethereal user
    pass: process.env.PASSWORD_EMAIL, // generated ethereal password
  },
});

exports.message = (email) => {
  return {
    from: process.env.ACCOUNT_EMAIL,
    to: "truongthanhhung2k2@gmail.com",
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    // subject: "AMP4EMAIL message",
    // text: "For clients with plaintext support only",
    // html: "<p>For clients that do not support AMP4EMAIL or amp content is not valid</p>",
    // amp: `<!doctype html>
    //       <html ⚡4email>
    //         <head>
    //           <meta charset="utf-8">
    //           <style amp4email-boilerplate>body{visibility:hidden}</style>
    //           <script async src="https://cdn.ampproject.org/v0.js"></script>
    //           <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
    //         </head>
    //         <body>
    //           <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
    //           <p>GIF (requires "amp-anim" script in header):<br/>
    //             <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
    //         </body>
    //       </html>`,
  };
};
