require("dotenv").config();

const configuration = {
  server: process.env.SMTP_SERVER || "sendinblue",
  user: process.env.SMTP_LOGIN,
  pass: process.env.SMTP_PASSWORD,
  port: process.env.SMTP_PORT || 587
};

module.exports = configuration;
