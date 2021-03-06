const nodeMailjet = require('node-mailjet');

const platform = require('connect-platform');


let config = platform.config.get('mailjet', {});

let mailjet;

// Check the existence of both needed API keys
if (config.APIPublicKey && config.APISecretKey) {

  // Setup our mailjet instance
  mailjet = nodeMailjet.connect(
    config.APIPublicKey,
    config.APISecretKey,
    {
      version: 'v3.1',
    }
  );

} else {
  console.log('Missing mailjet public and/or secret API keys');
}

module.exports = mailjet;