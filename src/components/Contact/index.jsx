import React from "react";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }
  };
  return (
    <>
      <section className="contact cont-map" id="contact">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-6 contact-form wow fadeInDown"
              data-wow-delay=".3s"
              
            >
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="section-head">
                  <h6>Contact Us</h6>
                  <h4 className="playfont">Get In Touch</h4>
                </div>

                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required="required"
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-curve btn-color">
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
 
  
      </section>
    </>
  );
};

export default Contact;
