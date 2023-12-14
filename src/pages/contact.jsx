
import React, { useState } from "react";
import '../styles/contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    event.preventDefault();
  }

  return (
    <section>
      <h2> Contact Me  </h2>
      <form onSubmit={handleFormSubmit} className="="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap>
        <label>Name</label>
        <input 
        value={name}
        type="text" 
        onChange={handleInputChange}
        name="name" />
        <label>Email</label>
        <input type="email" 
        value={email}
        onChange={handleInputChange}
        name="email" />
        <label>Message</label>
        <textarea 
        value={message}
        type="text"
        onChange={handleInputChange}
        name="message" />
        <input />
      </form>
        <button type="submit"> Submit </button>
    </section>
  );
};


export default Contact;