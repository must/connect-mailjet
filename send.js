const mailjet = require('./mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/send',
  public: false,
  inputs: [
    'envelope'
  ],
  outputs: [
    'response',
  ],
  controlOutputs: [
    'error',
  ],
  hints: {
    node: 'Sends an email using the email <span class="hl-blue">envelope</span>.',
    inputs: {
      email: 'the email envelope to send',
    },
    outputs: {
      response: 'The <span class="hl-blue">response</span> object that was returned by the API.'
    },
    controlOutputs: {
      error: 'An error was triggered during the send process.',
    },
  }
}, (inputs, output, control) => {
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

  var sendEmail = mailjet.post('send');

  sendEmail
  .request(inputs.envelope)
    .then(function(response) {
      output('response', response);
    })
    .catch(function(error) {
      output('response', error);
      control('error');
    });
});
