// test-smtp.js
const nodemailer = require("nodemailer");

(async () => {
  let transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: "info@casaclad.ca",
      pass: "your_password_here", // try plain text (temporarily)
    },
  });

  try {
    await transporter.sendMail({
      from: '"Casa Clad" <info@casaclad.ca>',
      to: "info@casaclad.ca",
      subject: "SMTP Test",
      text: "If you see this, your SMTP login works.",
    });
    console.log("✅ Email sent successfully!");
  } catch (err) {
    console.error("❌ Failed to send email:", err);
  }
})();
