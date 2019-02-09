const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: '',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

function sendMail( to, subject, body ) {
  transporter.sendEmail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: body
  })

}

function sendRegistrationEmail(user) {
  return sendEmail9user.email, `Hi ${user.username}`)
}

module.exports = {
  sendEmail,
  sendREgistrationEmail
}
