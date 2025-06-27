import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SocialLinks from '../SocialLinks';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a FormData object from the form reference
    const formData = new FormData(formRef.current);

    // Logging form data before sending
    const from_name = formData.get('from_name');
    const from_email = formData.get('from_email');
    const message = formData.get('message');

    console.log('Form data to be sent:', { from_name, from_email, message });

    try {
      const result = await emailjs.sendForm(
        'service_maz8eqv', 
        'template_x3ax9f9', 
        formRef.current, 
        '41i4q-HMAu5Hloe5m'
      );
      
      console.log('SUCCESS!', result.text);
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      formRef.current.reset(); // Better way to reset the form
      
    } catch (error) {
      console.error('FAILED...', error);
      toast.error('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email to {''}
              <span className="mail">adityajaiswal.codes@gmail.com</span>
              :
            </p>
          </div>
          <SocialLinks />
        </div>
        <ToastContainer style={{marginTop:'60px'}}/>
        <form ref={formRef} id="contact-form" onSubmit={sendEmail}>
          <input 
            placeholder="Name" 
            name="from_name" 
            type="text" 
            required 
            disabled={isSubmitting}
          />
          <input 
            placeholder="Email" 
            name="from_email" 
            type="email" 
            required 
            disabled={isSubmitting}
          />
          <textarea 
            placeholder="Message" 
            name="message" 
            required 
            disabled={isSubmitting}
          />
          <input 
            className="button" 
            id="submit" 
            value={isSubmitting ? "Sending..." : "Submit"} 
            type="submit" 
            disabled={isSubmitting}
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;