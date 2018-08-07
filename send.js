const mailjet = require('./mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/send',
  public: false,
  inputs: [
    'envelope'
  ],
  outputs: [
    'success'
  ],
  hints: {
    node: 'Sends an email using the email <span class="hl-blue">envelope</span>.',
    inputs: {
      email: 'the email envelope to send',
    },
    outputs: {
      success: 'If the  <span class="hl-blue">envelope</span> was sent successfully.'
    },
  }
}, (inputs, output, control) => {
  var sendEmail = mailjet.post('send');

  var emailData = {
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
  }
  console.log(inputs.envelope);
  console.log(
    sendEmail
    .request(inputs.envelope)
      .then(function(returnData) {
        console.log(returnData);
        output('success', true);
      })
      .catch(function() {
        console.log('error');
        output('success', false);
      })
  );
});
