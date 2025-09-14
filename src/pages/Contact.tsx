import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("success");
          e.currentTarget.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <p>If you’d like to connect, feel free to send me a message below.</p>

      <form
        className="contact-form"
        onSubmit={sendEmail}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="title">Subject</label>
          <select id="title" name="title" required>
            <option value="">-- Select a subject --</option>
            <option value="Job Opportunity">Job Opportunity</option>
            <option value="Collaboration">Collaboration</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} placeholder="Your message" required />
        </div>

        <button
          type="submit"
          className={`btn-submit ${status === "loading" ? "loading" : ""}`}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
    
      </form>

      {status === "success" && (
        <p className="form-status success">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="form-status error">Something went wrong. Please try again.</p>
      )}
    </section>
  );
}