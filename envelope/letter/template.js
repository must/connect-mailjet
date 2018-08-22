const mailjet = require('../../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/envelope/letter/template',
  public: false,
  inputs: [
    'id',
    'variables'
  ],
  outputs: [
    'templateLetter'
  ],
  hints: {
    node: 'Construct a letter from a template by using <span class="hl-blue">templateID</span>.',
    inputs: {
      id: 'The template id of the template to be used',
      variables: 'The template variables of the template to be used',
    },
    outputs: {
      letter: 'A <span class="hl-blue">Template letter</span> to be sealed in an envelope.',
    },
  }
}, (inputs, output, control) => {
  output('templateLetter',
    {
      'Mj-TemplateID': inputs.id,
      'Mj-TemplateLanguage': true,
      'Vars': inputs.variables,
    }
  );
});