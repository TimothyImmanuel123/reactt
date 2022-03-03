import React from 'react'
import Header from './Header'
import card2 from './assets/cardnew2.png'
import './styles/Section.css'

const Section = () => {
    return (
        <section className='section'>
            <Header/>

            <div className="section__box">
                <div className="section__content">
                    <h1 className='content__header'>HTI Bank</h1>
                    <h3>Bank dengan pelayanan serta keamanan yang sudah terpercaya sejak th 2000</h3>
                    <h4 className='small__p'>The Future Of The New Card</h4>
                    <button>Register</button>
                    <button>Info</button>
                </div>

                <div className="section__img">
                    <img src={card2} alt="" />
                </div>


            </div>

        </section>
    )
}

export default Section