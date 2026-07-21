"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend on this static rebuild — acknowledge locally.
    setSent(true);
  }

  return (
    <div className="form-card">
      <h3>Request an appointment</h3>
      <p className="form-note-top">
        Tell us how you&apos;d like to meet and we&apos;ll be in touch to arrange
        a time that suits you.
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full name" required />
        <input type="email" name="email" placeholder="Email address" required />
        <input type="tel" name="phone" placeholder="Phone number" required />

        <label className="field-label" htmlFor="appointment">
          How would you like to meet?
        </label>
        <select name="appointment" id="appointment" required defaultValue="">
          <option value="" disabled>
            Please select a meeting option
          </option>
          <option value="Your Home or Office">Your Home or Office</option>
          <option value="Office of your other professional advisor">
            Office of your other professional advisor
          </option>
          <option value="Online via Zoom">Online via Zoom</option>
          <option value="Online via Teams">Online via Teams</option>
        </select>

        <button type="submit" className="btn btn-block btn-lg">
          Submit Enquiry
        </button>

        {sent && (
          <p className="form-note">
            Thank you — your enquiry has been noted. We&apos;ll be in touch shortly.
          </p>
        )}
      </form>
    </div>
  );
}
