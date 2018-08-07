const mailjet = require('../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/envelope',
  public: false,
  inputs: [
    'letter',
    'fromEmail',
    'recipients'
  ],
  outputs: [
    'envelope'
  ],
  hints: {
    node: 'Construct an email <span class="hl-blue">envelope</span>.',
    inputs: {
      letter: 'The letter to be sent.',
      fromEmail: 'The from email object.',
      recipients: 'The recipients of the email'
    },
    outputs: {
      envelope: '<span class="hl-blue">Envelope</span> to be sent.'
    },
  }
}, (inputs, output, control) => {
  if (typeof inputs.fromEmail === 'string' || inputs.fromEmail instanceof String) {
    inputs.fromEmail = { 'Email': inputs.fromEmail };
  }

  if (typeof inputs.recipients === 'string' || inputs.recipients instanceof String) {
    inputs.recipients = { 'Email': inputs.recipients };
  }

  if (! Array.isArray(inputs.recipients)) 
    inputs.recipients = [ inputs.recipients ];

  output('envelope',
    Object.assign(
      inputs.letter,
      {
        'FromEmail': inputs.fromEmail.Email,
        'FromName': inputs.fromEmail.Name,
        'Recipients': inputs.recipients
      }
    )
  );
});
