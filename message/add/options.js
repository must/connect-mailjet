const mailjet = require('../../mailjet');
const util = require('../../util');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/message/add/options',
  public: false,
  inputs: [
    'parameters',
    'message'
  ],
  outputs: [
    'message'
  ],
  hints: {
    node: 'Add cc to a <span class="hl-blue">message</span>.',
    inputs: {
      parameters: 'The <span class="hl-blue">parameters</span> parameters.',
      message: 'A <span class="hl-blue">message</span>.',
    },
    outputs: {
      message: 'A <span class="hl-blue">message</span> with additional parmaters that can be used in an envelope.',
    },
  }
}, (inputs, output, control) => {
  output(
    'message',
    Object.assign(inputs.message, inputs.parameters)
  );
});