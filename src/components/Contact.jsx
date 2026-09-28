import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">

        <div className="section-header">
          <span className="section-index">05</span>
          <span className="section-label">Contact</span>
          <div className="section-line"></div>
        </div>

        <div className="contact-body">

          <div className="contact-info">

            <h1 className="contact-heading">
              Let's Work<br />
              <span className="contact-heading-accent">Together</span>
            </h1>

            <p className="contact-intro">
              I'm open to discussing web development opportunities,
              projects, internships and other interesting ideas.
            </p>

            <div className="contact-links">

              <a className="contact-link-row" href="mailto:amalkrish.dev.work@gmail.com">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-val">amalkrish.dev.work@gmail.com</span>
                <span className="contact-link-arrow">↗</span>
              </a>

              <a
                className="contact-link-row"
                href="https://github.com/amalkrishnadn"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-val">github.com/amalkrishnadn</span>
                <span className="contact-link-arrow">↗</span>
              </a>

              <a
                className="contact-link-row"
                href="https://www.linkedin.com/in/amal-krishna-dn"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-val">linkedin.com/in/amal-krishna-dn</span>
                <span className="contact-link-arrow">↗</span>
              </a>

            </div>

          </div>

          <form className="contact-form">

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">NAME</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" placeholder="your@email.com" />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                rows="7"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              <span>Send Message</span>
              <span className="btn-icon">→</span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;
