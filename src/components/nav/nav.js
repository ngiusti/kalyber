import React, { Component } from 'react'

import NavItem from '../nav-item/nav-item'

import './nav.scss'

import Logo from '../../assets/logo.png'

class Nav extends Component {
    state = {
        auth: false,
        slide: 0, 
        lastScrollY: 0, 
      };


    componentWillMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    
      handleScroll = () => {
        const { lastScrollY } = this.state; 
        const currentScrollY = window.scrollY;    
        if (currentScrollY > lastScrollY) {
          this.setState({ slide: '-130%' });
        } else {
          this.setState({ slide: '0px' });
        }
        this.setState({ lastScrollY: currentScrollY });
    };

    render() {
        return(
            <div className="nav__wrap" style={{
                transform: `translate(0, ${this.state.slide})`,
                transition: 'all 200ms linear',
              }}>
                <a className="nav-logo__wrap" href="#Header">
                    <img className="nav-logo" src={Logo}/>
                </a>
                <ul className="nav-items__wrap">
                    <NavItem title="About"/>
                    <NavItem title="Work"/>
                    <NavItem title="Contact"/>
                </ul>
            </div>
        )
    }

}

export default Nav;