import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  // Step 1: Create transporter
  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true, // true for port 465
    auth: {
      user: "info@casaclad.ca",
      pass: "Pcls@2024"
    },
  });

  try {
    // Step 2: Send the email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "info@casaclad.ca", // your receiving email
      subject: "New Contact Form Submission",
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ message: "Error sending email" });
  }
}
