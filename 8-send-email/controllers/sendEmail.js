const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "tyler67@ethereal.email",
      pass: "PxrnDX9ssDYdcEWNQd",
    },
  });

  const info = await transporter.sendMail({
    from: '"Duy Khanh" <khanhduytran.dev@gmail.com>',
    to: "bar@example.com",
    subject: "Hello",
    html: "<h2>Sending Emails with Node.js</h2>",
  });

  res.json(info);
};

module.exports = sendEmail;
