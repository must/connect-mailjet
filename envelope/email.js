const mailjet = require('../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/envelope/email',
  public: false,
  inputs: [
    'email',
    'name'
  ],
  outputs: [
    'emailObject'
  ],
  hints: {
    node: 'Construct an email object from <span class="hl-blue">email</span> and <span class="hl-blue">name</span>.',
    inputs: {
      email: 'The email that will be used for the contact.',
      name: 'The name that will be used for the contact.',
    },
    outputs: {
      emailObject: 'An <span class="hl-blue">email</span> object that can be used as the sender\'s or reciever\'s email.',
    },
  }
}, (inputs, output, control) => {
  output('emailObject', {
    'Email': inputs.email,
    'Name': inputs.name
  });
});