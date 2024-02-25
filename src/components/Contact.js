import React from 'react';
import '../Contact.css';

function ContactPage() {
    return (
      <div className="contact-page">
        <div className="contact-form">
          <h2 className='cu'>Contact Us</h2>
          <form className='frm'>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="additional-content">
          <h2>Laptop Shopping</h2>
          <p>Welcome to our laptop shopping website. We offer a wide range of laptops with the latest technology and features.</p>
        </div>
      </div>
    );
  }
  
  export default ContactPage;