'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', jobtitle: '', message: '', trap: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent]     = useState(false);
  const [sending, setSending] = useState(false);

  function validate() {
    const e = {};
    if (fields.name.trim().length < 2)                              e.name    = 'Enter your full name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))   e.email   = 'Enter email address in the correct format, like name@example.com';
    if (fields.message.trim().length < 10)                          e.message = 'Message must be 10 characters or more';
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (fields.trap) return; // honeypot

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSending(true);

const res = await fetch('https://formspree.io/f/xdajdnqq', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: fields.name,
    email: fields.email,
    jobtitle: fields.jobtitle,
    message: fields.message,
  }),
});

if (res.ok) {
  setSent(true);
} else {
  alert('Something went wrong, please try emailing me directly at stuartogier@gmail.com');
}
setSending(false);  }

  function field(id) {
    return {
      id,
      name: id,
      value: fields[id],
      onChange: e => setFields(f => ({ ...f, [id]: e.target.value })),
      className: `formInput${errors[id] ? ' formGroupError' : ''}`,
    };
  }

  if (sent) {
    return <p className="formSuccess">Thanks! I&apos;ll be in touch shortly.</p>;
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot */}
      <div className="formHoneypot" aria-hidden="true">
        <input
          type="text"
          name="trap"
          value={fields.trap}
          onChange={e => setFields(f => ({ ...f, trap: e.target.value }))}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div className={`formGroup${errors.name ? ' formGroupError' : ''}`}>
        <label className="formLabel" htmlFor="name">Full name</label>
        <input {...field('name')} type="text" autoComplete="name" required />
        {errors.name && <span className="formError visible" role="alert">{errors.name}</span>}
      </div>

      {/* Email */}
      <div className={`formGroup${errors.email ? ' formGroupError' : ''}`}>
        <label className="formLabel" htmlFor="email">Email address</label>
        <input {...field('email')} type="email" autoComplete="email" inputMode="email" required />
        {errors.email && <span className="formError visible" role="alert">{errors.email}</span>}
      </div>

      {/* Message */}
      <div className={`formGroup${errors.message ? ' formGroupError' : ''}`}>
        <label className="formLabel" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className={`formTextarea${errors.message ? ' formGroupError' : ''}`}
          rows={8}
          value={fields.message}
          onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
          required
        />
        {errors.message && <span className="formError visible" role="alert">{errors.message}</span>}
      </div>

      <div>
        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
