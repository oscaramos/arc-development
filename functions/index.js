const fs = require('fs')
const path = require('path')
const nodemailer = require("nodemailer")
const functions = require('firebase-functions')
const config = functions.config()

const cors = require('cors')({origin: true})

const admin = require('firebase-admin')
admin.initializeApp()

// Email template for sending message to client
const emailTemplate = fs.readFileSync(path.resolve(__dirname, 'Email_Template.html'), 'utf8')

// Email from the owner
const ownerEmail = 'oscar.ramos@ucsp.edu.pe'

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
      const { name, email: clientEmail, phone, message } = request.query

      const mailToOwner = await transporter.sendMail({
        from: 'Arc Development',
        to: ownerEmail,
        subject: 'Message received!',
        html: `
          <p style='font-size: 16px'>From: ${name}</p>
          <p style='font-size: 16px'>Email: ${clientEmail}</p>
          <p style='font-size: 16px'>Phone Number: ${phone}</p>
          <p style='font-size: 16px'>Message: ${message}</p>
        `
      })
      functions.logger.info(`Message send to ${ownerEmail} with id${mailToOwner.messageId}`, { structuredData: true })

      const mailToClient = await transporter.sendMail({
        from: 'Arc Development',
        to: clientEmail,
        subject: 'We have received your message!',
        html: emailTemplate
      })
      functions.logger.info(`Message send to ${clientEmail} with id${mailToClient.messageId}`, { structuredData: true })

      response.send('Message sent successfully')
    } catch (error) {
      response.send(error);
    }
  })
});
