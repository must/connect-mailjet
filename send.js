const mailjet = require('./mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/send',
  public: false,
  inputs: [
    'message'
  ],
  outputs: [],
  controlOutputs: [
    'sent',
    'error',
  ],
  hints: {
    node: 'Sends an email using the email <span class="hl-blue">message</span>.',
    inputs: {
      email: 'the email message to send',
    },
    controlOutputs: {
      sent: 'The email was sent. Look at console for the retreived response object.',
      error: 'An error was triggered during the send process.',
    },
  }
}, (inputs, output, control, error) => {
  if (!mailjet) error(new Error('Mailjet not configured properly.'));
  else {
    var sendEmail = mailjet.post('send');

    sendEmail
    .request({
        "Messages": [ inputs.message ]
      })
      .then(function(response) {
        console.log(JSON.stringify(response, null, 2));
        control('sent');
      })
      .catch(function(error) {
        console.log(JSON.stringify(error, null, 2));
        control('error');
      });
    }
});

  /* @Todo add file attachement support */
  /*var emailData = {
      'FromEmail': 'mustapha@benchaaben.com',
      'FromName': 'My Name',
      'Subject': 'Test with the NodeJS Mailjet wrapper',
      'Text-part': 'Hello NodeJs !',
      'Recipients': [{'Email': 'mustapha3892@gmail.com'}],
      'Attachments': [{
        "Content-Type": "text-plain",
        "Filename": "test.txt",
        "Content": "VGhpcyBpcyB5b3VyIGF0dGFjaGVkIGZpbGUhISEK", // Base64 for "This is your attached file!!!"
      }]
  }*/
