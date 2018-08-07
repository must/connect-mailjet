const mailjet = require('../../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/envelope/email/addVariables',
  public: false,
  inputs: [
    'variables',
    'emailObject'
  ],
  outputs: [
    'emailObject'
  ],
  hints: {
    node: 'Construct an email object from <span class="hl-blue">email</span> and <span class="hl-blue">name</span>.',
    inputs: {
      variables: 'The variables as an object. Variables can be used in template like this <span class="hl-blue">{{ var:variableName }}</span>',
      emailObject: 'An <span class="hl-blue">email</span> object that can be used as the sender\'s or reciever\'s email.',
    },
    outputs: {
      emailObject: 'An <span class="hl-blue">email</span> object with variables that can be used as the sender\'s or reciever\'s email.',
    },
  }
}, (inputs, output, control) => {
  output(
    'emailObject',
    Object.assign(inputs.emailObject, {
      'Vars': inputs.variables
    })
  );
});