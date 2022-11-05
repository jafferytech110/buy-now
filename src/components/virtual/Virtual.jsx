import React from 'react'
import ReactCompareImage from 'react-compare-image'
import shade from '../../assets/shade.png'
import css from './Virtual.module.css'
import before from '../../assets/before.png'
import after from '../../assets/after.png'

const Virtual = () => {
  return (
    <div className={css.virtual}>
        <div className={css.left}>
            <span>Virtual Try-On</span>
            <span>Never buy the wrong shade again!</span>
            <span>Try now!</span>
            <img src={shade} alt="bottom shade" />
        </div>

        <div className={css.right}>
            <div className={css.wrapper}>
                <ReactCompareImage leftImage={before} rightImage={after} />
            </div>
        </div>
    </div>
  )
}

export default Virtual