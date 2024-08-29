import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
    return(
        <div className="about" id="about">
            <div className="about-left">
                <img src={about_img} alt="" className="about-img"/>
                <img src={play_icon} alt="" className="play-icon"/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dignissimos excepturi id quisquam? Consequuntur dolores eos iste magnam non rerum! Ad eum illo incidunt iure obcaecati perspiciatis reiciendis temporibus! A aut, cupiditate doloribus facilis fuga, laborum libero, modi optio pariatur quae quaerat voluptate voluptates!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dignissimos excepturi id quisquam? Consequuntur dolores eos iste magnam non rerum! Ad eum illo incidunt iure obcaecati perspiciatis reiciendis temporibus! A aut, cupiditate doloribus facilis fuga, laborum libero, modi optio pariatur quae quaerat voluptate voluptates!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dignissimos excepturi id quisquam? Consequuntur dolores eos iste magnam non rerum! Ad eum illo incidunt iure obcaecati perspiciatis reiciendis temporibus! A aut, cupiditate doloribus facilis fuga, laborum libero, modi optio pariatur quae quaerat voluptate voluptates!</p>
            </div>
        </div>
    )
}

export default About;