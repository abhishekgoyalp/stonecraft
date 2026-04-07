/** Replace with your email before production — FormSubmit confirms on first use. */
const FORM_ACTION = "https://formsubmit.co/abhi95735@gmail.com";

export function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2>Contact us</h2>
          <p>Share quantities, sizes, delivery location, and timeline — we will respond with a formal quote.</p>
        </div>
        <div className="contact-grid">
          <div>
            <p className="contact-blurb">
              Prefer a call or WhatsApp? Add your number and business hours here when you go live.
            </p>
            <p className="contact-details">
              <strong>Example:</strong> Mon–Sat, 9:00–18:00 · response within one business day.
            </p>
          </div>
          <form className="contact-form" action={FORM_ACTION} method="POST">
            <input type="hidden" name="_subject" value="New sandstone inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />

            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" />

            <label htmlFor="message">Project details</label>
            <textarea id="message" name="message" required placeholder="Quantities, stone type, delivery city…" />

            <button type="submit" className="btn btn-primary">
              Send inquiry
            </button>
            <p className="form-note">
              Before launch, point the form at your email using FormSubmit (see README).
            </p>
          </form>
        </div>

        <div className="section faq" style={{ marginTop: "2.5rem" }}>
          <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>FAQ</h2>
          <details>
            <summary>Is this an e-commerce site?</summary>
            <p>No — we only display products and prices. Orders are handled after we contact you.</p>
          </details>
          <details>
            <summary>Are listed prices final?</summary>
            <p>No — they are starting points. Final price depends on quantity, finish, and delivery.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
