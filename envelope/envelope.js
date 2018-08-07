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
  console.log(inputs.letter);
  console.log({
      'FromEmail': inputs.fromEmail.email,
      'FromName': inputs.fromEmail.name
    });
  console.log(Object.assign(
    inputs.letter,
    {
      'FromEmail': inputs.fromEmail.email,
      'FromName': inputs.fromEmail.name
    }
  ));

  output('envelope',
    Object.assign(
      inputs.letter,
      {
        'FromEmail': inputs.fromEmail.email,
        'FromName': inputs.fromEmail.name,
        'Recipients': inputs.recipients
      }
    )
  );
});