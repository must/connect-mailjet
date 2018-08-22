const mailjet = require('../../mailjet');
const util = require('../../util');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/message/add/cc',
  public: false,
  inputs: [
    'emailObject',
    'message'
  ],
  outputs: [
    'message'
  ],
  hints: {
    node: 'Add cc to a <span class="hl-blue">message</span>.',
    inputs: {
      emailObject: 'The cc as JSON. Variables can be used in template like this <span class="hl-blue">{{ var:variableName }}</span>',
      message: 'An <span class="hl-blue">message</span> without cc which can be either be an <span class="hl-blue">emailObject</span> or a <span class="hl-blue">message</span>.',
    },
    outputs: {
      message: 'An <span class="hl-blue">message</span> with cc that can be used in an envelope.',
    },
  }
}, (inputs, output, control) => {
  console.log(inputs);
  util.sanitizeEmailObject(inputs);
  util.sanitizeItemToArray(inputs, 'emailObject');
  console.log(inputs);
  output(
    'message',
    Object.assign(inputs.message, { 'Cc': inputs.emailObject })
  );
});