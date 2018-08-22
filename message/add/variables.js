const mailjet = require('../../mailjet');
const platform = require('connect-platform');


platform.core.node({
  path: '/mailjet/message/add/variables',
  public: false,
  inputs: [
    'variables',
    'object'
  ],
  outputs: [
    'object'
  ],
  hints: {
    node: 'Add variables to a <span class="hl-blue">object</span>.',
    inputs: {
      variables: 'The variables as JSON. Variables can be used in template like this <span class="hl-blue">{{ var:variableName }}</span>',
      object: 'A <span class="hl-blue">object</span> without variables which can be either be an <span class="hl-blue">email</span> or a <span class="hl-blue">letter</span>.',
    },
    outputs: {
      object: 'A <span class="hl-blue">object</span> with variables that can be used in an envelope.',
    },
  }
}, (inputs, output, control) => {
  var returnObject;

  if('Variables' in inputs.object) {
    // We simply merge our variables in the existing Vars object property

    Object.assign(inputs.object.Variables, inputs.variables);
    
    returnObject = inputs.object;
  } else {
    // We assign the new variables in a new property called Vars
    returnObject = Object.assign(
      inputs.object,
      {
        'Variables': inputs.variables
      }
    );
  }

  output('object', returnObject);
});