const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: '',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

function sendEmail( to, subject, body ) {
  transporter.sendEmail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: body
  })

}

function sendRegistrationEmail(user) {
  return sendEmail(user.email, `Hi ${user.username}`)
}

module.exports = {
  sendEmail,
  sendRegistrationEmail
}
