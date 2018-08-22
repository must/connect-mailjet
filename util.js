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

module.exports = util;