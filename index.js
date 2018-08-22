module.exports.platform = {
  config : {
    nodes : {
      native : [
        'send',

        'message/text',
        'message/template',

        'message/emailObject',
        'message/to',

        'message/add/subject',
        'message/add/variables',
        'message/add/recipient',
      ]
    },
    aliases: {
      '/mail/send': '/mailjet/send',

      '/mail/message/text': '/mailjet/message/text',
      '/mail/message/template': '/mailjet/message/template',

      '/mail/message/emailObject': '/mailjet/message/emailObject',
      '/mail/message/to': '/mailjet/message/to',

      '/mail/message/add/subject': '/mailjet/message/add/subject',
      '/mail/message/add/variables': '/mailjet/message/add/variables',
      '/mail/message/add/recipient': '/mailjet/message/add/recipient',
    }
  }
}
