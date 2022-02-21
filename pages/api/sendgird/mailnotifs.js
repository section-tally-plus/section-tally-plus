const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'joeybene1@gmail.com', // Change to your recipient
  from: 'We will use the sendgrid email and store as an env var', // Change to your verified sender
  subject: 'A section has opened up for your class',
  text: 'Hello User, ....',
  html: '<strong>Hello User, ....</strong>',
}

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error)
  })
