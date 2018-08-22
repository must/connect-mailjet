const mailjet = require('../mailjet');
const util = require('../util');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/message/template',
  public: false,
  inputs: [
    'from',
    'to',
    'id',
    'variables',
  ],
  outputs: [
    'message'
  ],
  hints: {
    node: 'Construct a letter from a template by using <span class="hl-blue">templateID</span>.',
    inputs: {
      from: 'The from email object.',
      to: 'The recipients of the email',
      id: 'The template id of the template to be used',
      variables: 'The template variables of the template to be used',
    },
    outputs: {
      message: 'A <span class="hl-blue">Template message</span> to be sealed in an envelope.',
    },
  }
}, (inputs, output, control) => {
  util.sanitize(inputs);

  output('message',
    {
      'TemplateID': parseInt(inputs.id),
      'TemplateLanguage': true,
      'Variables': inputs.variables,
      'From': inputs.from,
      'To': inputs.to
    }
  );
});