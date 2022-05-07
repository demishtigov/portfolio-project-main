import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills i have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container " id='experience1'>
        <div className="experince__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div> 
                <h4>Css</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article><article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Redux-toolkit</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
          </div>
        </div>
      </div> 

    </section>
  )
}

export default Experience