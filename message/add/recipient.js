const mailjet = require('../../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/message/add/recipient',
  public: false,
  inputs: [
    'emailObject',
    'to'
  ],
  outputs: [
    'to'
  ],
  hints: {
    node: 'Add an <span class="hl-blue">emailObject</span> to the to\' list.',
    inputs: {
      emailObject: 'The email object that will be used for the contact.',
      to: 'A <span class="hl-blue">to</span> list that can be used as the recievers\' emails.'
    },
    outputs: {
      to: 'A <span class="hl-blue">to</span> list that can be used as the recievers\' emails.'
    },
  }
}, (inputs, output, control) => {
  if (typeof inputs.emailObject === 'string' || inputs.emailObject instanceof String) {
    inputs.emailObject = { 'Email': inputs.emailObject };
  }

  output('to', inputs.to.concat(inputs.emailObject));
});