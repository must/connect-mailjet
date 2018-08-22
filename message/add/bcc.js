const mailjet = require('../../mailjet');
const util = require('../../util');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/message/add/bcc',
  public: false,
  inputs: [
    'emailObject',
    'message'
  ],
  outputs: [
    'message'
  ],
  hints: {
    node: 'Add bcc to a <span class="hl-blue">message</span>.',
    inputs: {
      emailObject: 'The emailObject as JSON. Variables can be used in template like this <span class="hl-blue">{{ var:variableName }}</span>',
      message: 'An <span class="hl-blue">message</span> without bcc which can be either be an <span class="hl-blue">emailObject</span> or a <span class="hl-blue">message</span>.',
    },
    outputs: {
      message: 'An <span class="hl-blue">message</span> with bcc that can be used in an envelope.',
    },
  }
}, (inputs, output, control) => {
  util.sanitizeEmailObject(inputs);
  util.sanitizeItemToArray(inputs, 'emailObject');

  output(
    'message',
    Object.assign(inputs.message, { 'Bcc': inputs.emailObject })
  );
});