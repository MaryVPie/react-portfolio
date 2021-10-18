import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import PageHeading from '../components/PageHeading';

class ContactMePage extends Component {
  
  render() {
    // You can use them as regular CSS styles
    return <>
    <PageHeading text="Contact Me" />
    <ContactForm/>
    </>
  }
}

export default ContactMePage;