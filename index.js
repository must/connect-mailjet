module.exports.platform = {
  config : {
    nodes : {
      native : [
        'send',

        'message/text',
        'message/template',

        'message/emailObject',
        'message/to',

        'message/add/cc',
        'message/add/bcc',
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

      '/mail/message/add/cc': '/mailjet/message/add/cc',
      '/mail/message/add/bcc': '/mailjet/message/add/bcc',
      '/mail/message/add/subject': '/mailjet/message/add/subject',
      '/mail/message/add/variables': '/mailjet/message/add/variables',
      '/mail/message/add/recipient': '/mailjet/message/add/recipient',
    }
  },
  hints: {
    setup:
`First, you need a mailjet account. You can signup for <a href="https://app.mailjet.com/signup">free</a>.
Then,<br><br>
1) go to your mailjet <a href="https://app.mailjet.com/account/api_keys">API Key Management page</a>
2) get the public and secret keys
3) copy and paste each key in the relevant section of the config as shown below`,
    sampleConfig: {
      APIPublicKey: "APIPublicKey",
      APISecretKey: "APISecretKey"
    }
  }
}
