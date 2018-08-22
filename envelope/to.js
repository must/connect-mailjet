const mailjet = require('../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/envelope/to',
  public: false,
  inputs: [
    'emailObject'
  ],
  outputs: [
    'to'
  ],
  hints: {
    node: 'Construct a to\' list from <span class="hl-blue">emailObject</span>.',
    inputs: {
      emailObject: 'The email object that will be used for the contact.'
    },
    outputs: {
      to: 'A <span class="hl-blue">to</span> list that can be used as the recievers\' emails.',
    },
  }
}, (inputs, output, control) => {
  if (typeof inputs.emailObject === 'string' || inputs.emailObject instanceof String) {
    inputs.emailObject = { 'Email': inputs.emailObject };
  }
  
  output('to', [ inputs.emailObject ]);
});