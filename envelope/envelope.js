const mailjet = require('../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/envelope',
  public: false,
  inputs: [
    'letter',
    'from',
    'to'
  ],
  outputs: [
    'envelope'
  ],
  hints: {
    node: 'Construct an email <span class="hl-blue">envelope</span>.',
    inputs: {
      letter: 'The letter to be sent.',
      from: 'The from email object.',
      to: 'The recipients of the email'
    },
    outputs: {
      envelope: '<span class="hl-blue">Envelope</span> to be sent.'
    },
  }
}, (inputs, output, control) => {
  if (typeof inputs.from === 'string' || inputs.from instanceof String) {
    inputs.from = { 'Email': inputs.from };
  }

  if (typeof inputs.to === 'string' || inputs.to instanceof String) {
    inputs.to = { 'Email': inputs.to };
  }

  if (! Array.isArray(inputs.to)) 
    inputs.to = [ inputs.to ];

  output('envelope',
    Object.assign( inputs.letter,
      {
        'From': inputs.from,
        'To': inputs.to
      }
    )
  );
});
