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
        'envelope/email/addVariables',

        'envelope/recipients',
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
      '/mail/envelope/email/addVariables': '/mailjet/envelope/email/addVariables',

      '/mail/envelope/recipients': '/mailjet/envelope/recipients',
      '/mail/envelope/addRecipient': '/mailjet/envelope/addRecipient',
    }
  }
}
