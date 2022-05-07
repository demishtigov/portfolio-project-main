import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.png'
import {BsAward} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
 

const About = () => {
  return (
    <section id ='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small> 3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>
                Clients
              </h5>
              <small> 300+ clients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small> 10+ projects</small>
            </article>
          </div>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum laboriosam doloribus perferendis voluptatem fugiat cupiditate sequi! Asperiores, quae consequatur enim soluta doloribus veniam cupiditate distinctio ab architecto, ex rem!</p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
