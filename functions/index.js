const functions = require('firebase-functions')
const cors = require('cors')({origin: true})
const config = functions.config()
const nodemailer = require("nodemailer")

const admin = require('firebase-admin')
admin.initializeApp()

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      const info = await transporter.sendMail({
        from: 'Arc Development',
        to: 'odrr.99@gmail.com',
        subject: 'Testing nodemailer',
        text: 'Test successful'
      })
      functions.logger.info(`Message send to odrr.99@gmail.com with id${info.messageId}`, { structuredData: true })
      response.send('Message sent successfully')
    } catch (error) {
      response.send(error);
    }
  })
});
