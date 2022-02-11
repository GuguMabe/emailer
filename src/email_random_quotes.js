const { quote } = require("./quotes");
const { transporter } = require("./transporterSetUp.js");
const configuration = require("./configurations.js");

function getEmailAddress() {
  let recipientAddresses = [];
  for (let i = 2; i < process.argv.length; i++) {
    recipientAddresses.push(process.argv[i]);
  }
  return recipientAddresses.join(", ");
}

function retrieveMailOptions(
  fromEmailAddress = configuration.user,
  toEmailAddress = getEmailAddress()
) {
  return {
    from: fromEmailAddress,
    to: toEmailAddress,
    subject: `inspiration for today!`,
    text: quote(),
  };
}
function emailer(mailOptionsObject) {
  transporter.sendMail(mailOptionsObject, function (err) {
    if (err) {
      throw err;
    } else {
      console.log(`email sent `);
    }
  });
}

module.exports = { emailer, retrieveMailOptions };
