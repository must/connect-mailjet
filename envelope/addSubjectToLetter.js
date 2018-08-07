const mailjet = require('../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/envelope/addSubjectToLetter',
  public: false,
  inputs: [
    'letter',
    'subject'
  ],
  outputs: [
    'letter'
  ],
  hints: {
    node: 'Add a <span class="hl-blue">subject</span> to a letter.',
    inputs: {
      letter: 'The letter to which the subject will be added.',
      subject: 'The subject that will be added to the letter.',      
    },
    outputs: {
      letter: '<span class="hl-blue">Letter</span> to be sealed in an envelope.',
    },
  }
}, (inputs, output, control) => {
  output(
    'letter',
    Object.assign(inputs.letter, { 'Subject': inputs.subject })
  );
});