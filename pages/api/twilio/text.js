const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Your Account SID from www.twilio.com/console
const authToken = 'your_auth_token'; // Your Auth Token from www.twilio.com/console
//will add to envoinrment file once trigger is ready for text

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from Node',
    to: '+12345678901', // Text this number
    from: '+1', // From a valid Twilio number
    //going to make a new twilio account and number since they charge after a certain number of texts
    
  })
  .then((message) => console.log(message.sid));
