const nodemailer = require("nodemailer");
const configuration = require("./configurations");

const transporter = nodemailer.createTransport({
  service: configuration.server,
  secure: false,
  port: configuration.port,
  auth: {
    user: configuration.user,
    pass: configuration.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = { transporter };
