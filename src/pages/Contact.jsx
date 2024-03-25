import { React, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading( true );

    console.log('pk', import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Nataliia",
        from_email: form.email,
        to_email: 'nataly.verbenskaya@gmail.com',
        message: form.message
      },
      {
        publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      }
    ).then(()=> {
        setIsLoading(false)
          // TODO: show success message
          // TODO: hide an alert
          setForm({
            name: "",
            email: '',
            message: ""
          })
      }).catch((error) => {
        setIsLoading(false)
        console.log(error)
        // TODO: show error message
      })
  };

  const handleFocus = () => {};
  const handleBlur = () => {};
  
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1>Get in Touch</h1>
        <form
        className="w-full flex flex-col gap-7 mt-14"
        onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="example@mail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              className="input"
              placeholder="Let me know how I can help you!"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
          className='btn'
          type='submit'
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
