module.exports.platform = {
  config : {
    nodes : {
      native : [
        'send',

        'envelope/envelope',
        
        'envelope/letter/text',
        'envelope/letter/template',
        'envelope/letter/addSubject',

        'envelope/email/email',

        'envelope/addVariables',
        'envelope/to',
        'envelope/addRecipient',
      ]
    },
    aliases: {
      '/mail/send': '/mailjet/send',
      
      '/mail/envelope': '/mailjet/envelope',

      '/mail/envelope/letter/text': '/mailjet/envelope/letter/text',
      '/mail/envelope/letter/template': '/mailjet/envelope/letter/template',
      '/mail/envelope/letter/addSubject': '/mailjet/envelope/letter/addSubject',

      '/mail/envelope/email': '/mailjet/envelope/email',
      '/mail/envelope/addVariables': '/mailjet/envelope/addVariables',

      '/mail/envelope/to': '/mailjet/envelope/to',
      '/mail/envelope/addRecipient': '/mailjet/envelope/addRecipient',
    }
  }
}
