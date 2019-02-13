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

  if(process.env.NODE_ENV === 'test') return false

  return sendMail(user.email, 'Thanks for registering', `Dear ${user.username}, Thank you for registering at City Post. Now you can navigate between our continent and get tips from all our users about cities.

  Regards,
  City Post Team`)
}

function sendResetPassword(user) {

  if(process.env.NODE_ENV === 'test') return false

  return sendMail(user.email, 'Reset your password', `Dear ${user.username}, You recently requested to reset your City Post password. To select a new password, click on the link below:

  http://localhost:8000/newpassword/${user._id}

  If you did not attempt to reset your password, please contact us immediately to citypost@gmail.com

  Regards,
  City Post Team`)

}


module.exports = {
  sendMail,
  sendRegistrationEmail,
  sendResetPassword
}
