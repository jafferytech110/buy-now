import React from 'react'
import css from './Testimonials.module.css'
import {TestimonialsData} from '../../data/testimonials'
import { Swiper,SwiperSlide } from 'swiper/react'

const Testmonials = () => {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, repellendus!</span>
                </div>
            <div className={css.container}>
                <h1>Testimonials</h1>
            </div>
            <div className={css.container}>
                <span>100K</span>
                <span>Happy Customers with us</span>
            </div>
            </div>

            <div className={css.carousal}>
                <Swiper 
                slidesPerView={3} 
                slidesPerGroup={1} 
                spaceBetween={20} 
                className={css.tCarousal} 
                >
                    {
                        TestimonialsData.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className={css.testimonial}>
                                    <img src={testimonial.image} alt={testimonial.name} />
                                    <span>{testimonial.comment}</span>
                                    <hr />
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testmonials