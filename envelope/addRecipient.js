const mailjet = require('../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/envelope/addRecipient',
  public: false,
  inputs: [
    'emailObject',
    'recipients'
  ],
  outputs: [
    'recipients'
  ],
  hints: {
    node: 'Add an <span class="hl-blue">emailObject</span> to the recipients\' list.',
    inputs: {
      emailObject: 'The email object that will be used for the contact.',
      recipients: 'A <span class="hl-blue">recipients</span> list that can be used as the recievers\' emails.'
    },
    outputs: {
      recipients: 'A <span class="hl-blue">recipients</span> list that can be used as the recievers\' emails.'
    },
  }
}, (inputs, output, control) => {
  if (typeof inputs.emailObject === 'string' || inputs.emailObject instanceof String) {
    inputs.emailObject = { 'Email': inputs.emailObject };
  }

  output('recipients', inputs.recipients.concat(inputs.emailObject));
});