import React from 'react';
import './style.css';
import Header from './Header';
import ContactForm from './ContactForm';
import Footer from './Footer';

function NotFound() {
  return (
    <div className='subpage'>
      <Header title="POV Self Serve Platform" />

      <ContactForm />
      <Footer />
    </div>
  );
}

export default NotFound;
