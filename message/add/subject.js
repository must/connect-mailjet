const mailjet = require('../../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/message/add/subject',
  public: false,
  inputs: [
    'subject',
    'message',
  ],
  outputs: [
    'message'
  ],
  hints: {
    node: 'Add a <span class="hl-blue">subject</span> to a letter.',
    inputs: {
      subject: 'The subject that will be added to the message.',
      message: 'The message to which the subject will be added.',
    },
    outputs: {
      message: '<span class="hl-blue">Message</span> to be sent.',
    },
  }
}, (inputs, output, control) => {
  output(
    'message',
    Object.assign(inputs.message, { 'Subject': inputs.subject })
  );
});