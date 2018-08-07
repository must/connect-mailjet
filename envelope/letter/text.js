const mailjet = require('../../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/envelope/letter/text',
  public: false,
  inputs: [
    'textPart'
  ],
  outputs: [
    'letter'
  ],
  hints: {
    node: 'Construct a letter from <span class="hl-blue">textPart</span>.',
    inputs: {
      textPart: 'The textPart that will be added as the content of the letter.',
    },
    outputs: {
      letter: '<span class="hl-blue">Letter</span> to be sealed in an envelope.',
    },
  }
}, (inputs, output, control) => {
  output('letter', { 'Text-part': inputs.textPart });
});