import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {

  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'KiCon Website Design',
      gitgub: 'https://github.com',
      demo: 'https://dribbble.com/shots/17829565-KiCon-Website-Design'
    },
    {
      id: 2,
      image: IMG2,
      title: 'Podcast Platform - Website',
      gitgub: 'https://github.com',
      demo: 'https://dribbble.com/shots/17829097-Podcast-Platform-Website'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Design studio landing page',
      gitgub: 'https://github.com',
      demo: 'https://dribbble.com/shots/17825404-Design-studio-landing-page'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Money Keeper',
      gitgub: 'https://github.com',
      demo: 'https://dribbble.com/shots/17828324-Money-Keeper-Dark-Mode'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Harley Davidson Website - Mobile version',
      gitgub: 'https://github.com',
      demo: 'https://dribbble.com/shots/17831779-Harley-Davidson-Website-Mobile-version'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Foodvillage-Food Delivery Landing Page',
      gitgub: 'https://github.com',
      demo: 'https://dribbble.com/shots/17829354-Foodvillage-Food-Delivery-Landing-Page'
    }
  ]



  return (
    <section id ='portfolio'>
      <h5>My Recent Wok</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, gitgub, demo}) => {
         return (
            <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={gitgub} className='btn' target= '_blank'>GitHub</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>
         )
        })
      }

      </div>

    </section >
  )
}

export default Portfolio