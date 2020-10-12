import React from 'react'

import './header.scss'

import Image from '../../assets/kalyber-type.png'

const Header = () => (
    <div className="header__wrap" id="Header">
        <div className="header-title">
            <img className="header-title-image" src={Image} alt="header image"/>
        </div>
        <div className="header-background__wrap">
            <div className="header-background-cover"></div>
            <div className="header-background-image"></div>
        </div>
    </div>
)

export default Header;