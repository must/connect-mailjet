let util = {};

util.sanitize = function(inputs) {
  if (typeof inputs.from === 'string' || inputs.from instanceof String) {
    inputs.from = { 'Email': inputs.from };
  }

  if (typeof inputs.to === 'string' || inputs.to instanceof String) {
    inputs.to = { 'Email': inputs.to };
  }

  if (! Array.isArray(inputs.to)) 
    inputs.to = [ inputs.to ];
}

util.sanitizeEmailObject = function(inputs) {
  if (typeof inputs.emailObject === 'string' || inputs.emailObject instanceof String)
    inputs.emailObject = { 'Email': inputs.emailObject };
}

util.sanitizeItemToArray = function(inputs, property) {
  if (! Array.isArray(inputs[property])) 
    inputs[property] = [ inputs[property] ];
}

module.exports = util;