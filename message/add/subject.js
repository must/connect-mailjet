const mailjet = require('../../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/message/add/subject',
  public: false,
  inputs: [
    'message',
    'subject'
  ],
  outputs: [
    'message'
  ],
  hints: {
    node: 'Add a <span class="hl-blue">subject</span> to a letter.',
    inputs: {
      message: 'The message to which the subject will be added.',
      subject: 'The subject that will be added to the message.',      
    },
    outputs: {
      message: '<span class="hl-blue">Letter</span> to be sealed in an envelope.',
    },
  }
}, (inputs, output, control) => {
  output(
    'message',
    Object.assign(inputs.letter, { 'Subject': inputs.subject })
  );
});