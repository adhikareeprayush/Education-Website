import React from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Programs from "./Components/Programs/Programs.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About.jsx";
import Campus from "./Components/Campus/Campus.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";

const App = () =>{
    return(
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Title subTitle='Our PROGRAM' title='What We Offer'/>
                <Programs />
                <About />
                <Title subTitle='Gallery' title='Campus Photos' />
                <Campus />
                <Title subTitle="Testimonials" title="What Student Says" />
                <Testimonials />
             </div>
        </div>
    )
}

export default App;