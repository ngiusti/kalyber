import React from 'react'

import './about.scss'

import logo from '../../assets/circle-kalyber.png'

const About = () => (
    <div id="About" className="about__wrap">
        <div className="content__wrap">
            <h2 className="content-title">ABOUT</h2>
            <div className="about-content__wrap">
                <div className="about-content-item__wrap">
                    <p >
                        Proin porttitor elementum sodales. Nullam sed neque orci. Morbi quis dictum lectus. Phasellus convallis malesuada ipsum, sit amet lobortis enim finibus eu. Nunc semper purus sit amet est ultrices viverra. Ut ut nisl condimentum, dignissim odio eget, pellentesque urna. Nulla facilisi. Proin eget vehicula ligula. Curabitur at fermentum diam. Etiam pulvinar aliquam metus vitae aliquam. Nulla facilisi. Quisque in nunc ac est tincidunt venenatis sit amet in ipsum.
                    </p>
                </div>
            </div>
            <div className="about-image__wrap">
                <img className="about-image" src={logo} alt="logo"/>
            </div>
        </div>
        <div className="about-background"></div>
    </div>
)

export default About