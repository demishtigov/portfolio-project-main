import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';





const Testimonials = () => {

  const data = [
    {
      avatar: AVTR1,
      name: 'Tina Snow',
      review: 'Review Review Review Review Review Review Review Review Review'
    },
    {
      avatar: AVTR2,
      name: 'Shatta Wale',
      review: 'Review Review Review Review Review Review Review Review Review'
    },
    {
      avatar: AVTR3,
      name: 'Nana Ama M',
      review: 'Review Review Review Review Review Review Review Review Review'
    },
    {
      avatar: AVTR4,
      name: 'Kwame Despite',
      review: 'Review Review Review Review Review Review Review Review Review'
    }
  ]

  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key ={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt="avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='cleint__review'>
                {review}
              </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonials