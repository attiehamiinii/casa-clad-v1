import React, { useState, useRef, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", website: "" }); // website = honeypot
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState(null);
  const startedAtRef = useRef(Date.now());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotice(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, startedAt: startedAtRef.current }),
      });

      const data = await res.json();
      if (res.ok) {
        setNotice({ type: "success", text: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "", website: "" });
      } else {
        setNotice({ type: "error", text: data.message || "Failed to send message." });
      }
    } catch (err) {
      setNotice({ type: "error", text: "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact cont-map" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 contact-form wow fadeInDown" data-wow-delay=".3s">
            <form id="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="section-head">
                <h6>Contact Us</h6>
                <h4 className="playfont">Get In Touch</h4>
              </div>

              {notice && (
                <p
                  role="status"
                  style={{
                    color: notice.type === "success" ? "green" : "crimson",
                    marginBottom: 12,
                  }}
                >
                  {notice.text}
                </p>
              )}

              {/* Honeypot (hidden from humans) */}
              <div style={{ position: "absolute", left: "-9999px", opacity: 0 }} aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="controls">
                <div className="form-group">
                  <input
                    id="form_name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    id="form_email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    id="form_message"
                    name="message"
                    placeholder="Message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-curve btn-color" disabled={loading}>
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
