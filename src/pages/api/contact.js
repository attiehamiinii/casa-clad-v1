// /src/pages/api/contact.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Basic sanitization
const sanitize = (s) =>
  String(s || "")
    .replace(/<[^>]*>?/gm, "")
    .trim();

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

  try {
    const { name, email, message, website = "", startedAt } = req.body || {};

    // Honeypot anti-bot: "website" must be empty
    if (website) return res.status(200).json({ ok: true }); // silently ignore spam

    // Time-on-page check (optional anti-bot)
    if (startedAt && Date.now() - Number(startedAt) < 2000) {
      return res.status(429).json({ message: "Too fast, try again." });
    }

    // Validate
    const _name = sanitize(name);
    const _email = sanitize(email);
    const _message = sanitize(message);

    if (!_name || !_email || !_message) {
      return res.status(400).json({ message: "Please fill all fields." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_email)) {
      return res.status(400).json({ message: "Invalid email." });
    }

    // Build email
    const subject = `New contact form message from ${_name}`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial">
        <h2>CasaClad Contact Form</h2>
        <p><b>Name:</b> ${_name}</p>
        <p><b>Email:</b> ${_email}</p>
        <p><b>Message:</b></p>
        <pre style="white-space:pre-wrap;line-height:1.5">${_message}</pre>
      </div>
    `;
    const text = `CasaClad Contact Form
Name: ${_name}
Email: ${_email}

Message:
${_message}
`;

    // IMPORTANT:
    // After you verify your domain in Resend, you can send FROM info@casaclad.ca.
    // Until then, use your @resend.dev trial sender or a verified sender.
    const result = await resend.emails.send({
      from: "CasaClad <info@casaclad.ca>", // use your verified sender
      to: ["info@casaclad.ca"],
      reply_to: _email,                     // so you can reply directly to the customer
      subject,
      html,
      text,
    });

    if (result.error) {
      console.error(result.error);
      return res.status(500).json({ message: "Email failed. Please try again later." });
    }

    return res.status(200).json({ ok: true, message: "Message sent." });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({ message: "Server error." });
  }
}
