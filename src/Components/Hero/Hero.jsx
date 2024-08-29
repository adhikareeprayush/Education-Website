import React from 'react'
import'./Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () =>{
    return(
        <div className="hero container" id="hero">
            <div className="hero-text">
                <h1>We Ensute better education for a better world.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dicta dignissimos eum fuga id labore pariatur quas rerum sequi totam!</p>
                <button className="btn">Explore more <img src={dark_arrow} alt=""/></button>
            </div>
        </div>
    )
}

export default Hero;