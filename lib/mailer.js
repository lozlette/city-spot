const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

function sendMail( to, subject, body ) {
  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: body
  })

    .then(info => console.log('EMAIL WAS SENT TO YOUR EMAIL ADDRESS', info))
    .catch(err => console.log(err))

}

function sendRegistrationEmail(user) {
  return sendMail(user.email, `Hi ${user.username}`)
}

module.exports = {
  sendMail,
  sendRegistrationEmail
}
