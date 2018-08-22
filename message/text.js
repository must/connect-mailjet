const mailjet = require('../mailjet');
const util = require('../util');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/message/text',
  public: false,
  inputs: [
    'from',
    'to',
    'textPart'
  ],
  outputs: [
    'message'
  ],
  hints: {
    node: 'Construct a letter from <span class="hl-blue">textPart</span>.',
    inputs: {
      from: 'The from email object.',
      to: 'The recipients of the email',
      textPart: 'The textPart that will be added as the content of the letter.'
    },
    outputs: {
      message: 'A text<span class="hl-blue">Message</span> to be sent.',
    },
  }
}, (inputs, output, control) => {
  util.sanitize(inputs);

  output('message', {
    'TextPart': inputs.textPart,
    'From': inputs.from,
    'To': inputs.to
  });
});