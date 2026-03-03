import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import type { ToastState } from './Toast';
import Toast from './Toast';

type Errors = Partial<Record<'name' | 'from_email' | 'message', string>>;

export default function ContactSection() {
  const form = useRef<HTMLFormElement | null>(null);

  const [errors, setErrors] = useState<Errors>({});
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const validate = (fd: FormData) => {
    const next: Errors = {};

    const name = String(fd.get('name') ?? '').trim();
    const fromEmail = String(fd.get('from_email') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();

    if (!name) next.name = 'Full name wajib diisi.';
    if (!fromEmail) next.from_email = 'Email wajib diisi.';
    else {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fromEmail);
      if (!emailOk) next.from_email = 'Format email tidak valid.';
    }
    if (!message) next.message = 'Message wajib diisi.';

    return next;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('sendEmail triggered');
    if (!form.current) return;

    const fd = new FormData(form.current);
    const nextErrors = validate(fd);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSending(true);
    setToast(null); // bersihkan toast lama

    emailjs
      .sendForm('service_7ycvvrg', 'template_e4uuyjb', form.current, 'ILF-ieeE-8d6EDxeA')
      .then(() => {
        form.current?.reset();
        setErrors({});
        setToast({ type: 'success', text: 'Pesan berhasil dikirim. Saya akan balas secepatnya.' });
      })
      .catch((error) => {
        console.log(error);
        setToast({ type: 'error', text: 'Gagal mengirim pesan. Coba lagi beberapa saat.' });
      })
      .finally(() => setIsSending(false));
  };

  const errStyle: React.CSSProperties = {
    color: '#ff4d4f',
    fontSize: '12px',
    marginTop: '6px',
    display: 'block',
  };

  return (
    <section className="six" id="contact">
      {/* Toast custom */}
      <Toast toast={toast} onClose={() => setToast(null)} autoHideMs={3500} />

      <div className="main-intro">
        <i className="fa-solid fa-phone glow-icon"></i>
        <p>CONTACT</p>
      </div>

      <p className="greeting-about">
        Let's Work <span>Together!</span>
      </p>

      {/* ... UI kamu tetap */}
      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="to_email" value="mhmdangga2802@gmail.com" />
        <input type="hidden" name="reply_to" value="" />

        <div className="contact-name">
          <label htmlFor="contact-name">FULL NAME</label>
          <input
            id="contact-name"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={() => {
              if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
            }}
          />
          {errors.name && <small style={errStyle}>{errors.name}</small>}
        </div>

        <div className="contact-email">
          <label htmlFor="email-contact">EMAIL</label>
          <input
            id="email-contact"
            type="email"
            name="from_email"
            placeholder="Your Email Address"
            required
            onChange={(e) => {
              const f = form.current;
              if (!f) return;
              const reply = f.querySelector<HTMLInputElement>('input[name="reply_to"]');
              if (reply) reply.value = e.target.value;

              if (errors.from_email) setErrors((p) => ({ ...p, from_email: undefined }));
            }}
          />
          {errors.from_email && <small style={errStyle}>{errors.from_email}</small>}
        </div>

        <div className="subject-email">
          <label htmlFor="subject-contact">SUBJECT</label>
          <input id="subject-contact" type="text" name="subject" placeholder="Your Subject" />
        </div>

        <div className="contact-phone">
          <label htmlFor="phone-contact">PHONE</label>
          <input
            id="phone-contact"
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            inputMode="tel"
            autoComplete="tel"
            onChange={(e) => {
              const cleaned = e.target.value.replace(/[^0-9+\-() ]/g, '');
              if (cleaned !== e.target.value) e.target.value = cleaned;
            }}
          />
        </div>

        <div className="contact-message">
          <label htmlFor="message-contact">MESSAGE</label>
          <textarea
            id="message-contact"
            name="message"
            placeholder="Your Message Here"
            required
            onChange={() => {
              if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
            }}
          />
          {errors.message && <small style={errStyle}>{errors.message}</small>}
        </div>

        <button type="submit" className="contact-me" disabled={isSending}>
          {isSending ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
      </form>
    </section>
  );
}
