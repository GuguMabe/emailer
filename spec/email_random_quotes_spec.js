const { emailer, retrieveMailOptions } = require("../src/email_random_quotes");
const { transporter } = require("../src/transporterSetUp");
const { quote } = require("../src/quotes");

let mailOptions = retrieveMailOptions();

mailOptions.from = "gugu.mavimbela@umuzi.org";
mailOptions.to = `example@eg.com`;
mailOptions.subject = "inspiration for today!";
mailOptions.text = quote();

describe("emailer function", () => {
  it("should check if sendMail has only been called once", () => {
    spyOn(transporter, "sendMail");
    emailer(mailOptions);
    expect(transporter.sendMail).toHaveBeenCalledTimes(1);
  });

  it("should check if sendMail is called with the correct type of arguments", () => {
    spyOn(transporter, "sendMail");
    emailer(mailOptions);
    expect(transporter.sendMail).toHaveBeenCalledWith(
      Object({
        from: "gugu.mavimbela@umuzi.org",
        to: `example@eg.com`,
        subject: `inspiration for today!`,
        text: jasmine.any(String),
      }),
      jasmine.any(Function)
    );
  });
  it("should check if it sends email to the specified address", () => {
    expect(mailOptions.to).toBe(`example@eg.com`);
  });
});
