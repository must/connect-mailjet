const mailjet = require('../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/envelope/recipients',
  public: false,
  inputs: [
    'emailObject'
  ],
  outputs: [
    'recipients'
  ],
  hints: {
    node: 'Construct a recipients\' list from <span class="hl-blue">emailObject</span>.',
    inputs: {
      emailObject: 'The email object that will be used for the contact.'
    },
    outputs: {
      recipients: 'A <span class="hl-blue">recipients</span> list that can be used as the recievers\' emails.',
    },
  }
}, (inputs, output, control) => {
  if (typeof inputs.emailObject === 'string' || inputs.emailObject instanceof String) {
    inputs.emailObject = { 'Email': inputs.emailObject };
  }
  
  output('recipients', [ inputs.emailObject ]);
});