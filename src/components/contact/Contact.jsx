import React from 'react';
import './contact.css';
import {MdEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsappSquare} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get InTouch</h5>
      <h2>Contacts Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>@yandex.ru</h5>
            <a href='mailto:magomed.demishtigov@yandex.ru' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Magomed Dem</h5>
            <a href='https://vk.com/id355422608' target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsappSquare className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>12345678</h5>
            <a href='https://api.whatsapp.com/send?phone=+79380025965' target='_blank'>Send a message</a>
          </article>
        </div>

        <form action=''>
          <input type="text" name ='name' placeholder='Your full Name' required />
          <input type="email" name='email' placeholder='Your Email'  required/>
          <textarea name='message' rows='7' placeholder='Your Mesage'  required/>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      
      </div>
    </section>
  );
};

export default Contact;
