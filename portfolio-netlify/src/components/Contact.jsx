import { useState } from "react";

const EMPTY = { name: "", email: "", message: "" };

// Netlify Forms expects a URL-encoded POST to "/" with a "form-name" field.
function encode(data) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!isEmail(form.email)) next.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      next.message = "Message must be at least 10 characters.";
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccess("");
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      setSuccess(`Thanks, ${form.name}! Your message was sent.`);
      setForm(EMPTY);
    } catch {
      setErrors({ message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container narrow">
        <h2>Contact</h2>

        {success && <div className="alert alert-success">{success}</div>}

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Required by Netlify Forms */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>

          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
