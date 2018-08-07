const mailjet = require('../../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/envelope/letter/template',
  public: false,
  inputs: [
    'templateID',
    'templateLanguage'
  ],
  outputs: [
    'templateLetter'
  ],
  hints: {
    node: 'Construct a letter from a template by using <span class="hl-blue">templateID</span>.',
    inputs: {
      templateID: 'The template id of the template to be used',
      templateLanguage: 'Wether or not to use the templateLanguage',
    },
    outputs: {
      letter: '<span class="hl-blue">Template letter</span> to be sealed in an envelope.',
    },
  }
}, (inputs, output, control) => {
  output('templateLetter',
    {
      'Mj-TemplateID': inputs.templateID,
      'Mj-TemplateLanguage': inputs.templateLanguage,
    }
  );
});