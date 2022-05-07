import React from 'react';
import './services.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Services = () => {
  return (
    <section id='services'>
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__header'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* End OF UI/UX */}

        <article className='service'>
          <div className='service__header'>
            <h3>Web Dev</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* End OF web dev */}

        <article className='service'>
          <div className='service__header'>
            <h3>Content creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* End OF contenr creatin */}
      </div>
    </section>
  );
};

export default Services;
