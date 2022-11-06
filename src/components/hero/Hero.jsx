import React from 'react'
import css from './Hero.module.css'
import Heroimg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Hero = () => {
    const transition ={duration:3, type: "spring"}

    return (
        <div className={css.container}>
            {/* left side */}
            <div className={css.h_sides}>
                <span className={css.text1}>skin protection cream</span>
                <div className={css.text2}>
                    <span>Trendy Collections</span>
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum adipisci maiores magnam.</span>
                </div>
            </div>
            {/* middle side */}
            <div className={css.wrapper}>
                <motion.div 
                initial={{bottom: "2rem"}}  
                whileInView={{bottom: "0rem"}} 
                className={css.blueCircle} 
                transition={transition}></motion.div>
                <img src={Heroimg} alt="hero" width={600} />
                <div className={css.cart2}>
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Signup Offers</span>
                        <BsArrowRight />
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>
                <div className={css.customers}>
                    <span>100k+</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}

export default Hero