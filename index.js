module.exports.platform = {
  config : {
    nodes : {
      native : [
        'send',
        'envelope/envelope',
        'envelope/textContentLetter',
        'envelope/addSubjectToLetter',
        'envelope/email',
        'envelope/recipients',
        'envelope/addRecipient',
      ]
    },
    aliases: {
      '/mail/send': '/mailjet/send',
      '/mail/envelope': '/mailjet/envelope',
      '/mail/envelope/textContentLetter': '/mailjet/envelope/textContentLetter',
      '/mail/envelope/addSubjectToLetter': '/mailjet/envelope/addSubjectToLetter',
      '/mail/envelope/email': '/mailjet/envelope/email',
      '/mail/envelope/recipients': '/mailjet/envelope/recipients',
      '/mail/envelope/addRecipient': '/mailjet/envelope/addRecipient',
    }
  }
}
