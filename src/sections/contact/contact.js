import React, { Component } from 'react'

import './contact.scss'

import FormInput from '../../components/form-input/form-input'

class Contact extends Component{

    constructor() {
        super();
        this.state = {
          firstName: "",
          lastName: "",
          company: "",
          email: "",
        };
      }
    
      handleChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value,
        });
      };

    render(){
        const { firstName, lastName, company, email } = this.state;

        return(
            <div id="Contact" className="contact__wrap">
                    <div className="content__wrap">
                        <h2 className="content-title">Contact</h2>
                        <p className="contact-copy">In today's times digital is more important than ever. We are bringing our expertise to help your business navigate the challenges of embracing digital</p>
                        <form className="contact-form__wrap">
                            <FormInput
                                type='text'
                                name='firstName'
                                value={firstName}
                                onChange={this.handleChange}
                                label='First Name'
                                required
                            />
                            <FormInput
                                type='text'
                                name='lastName'
                                value={lastName}
                                onChange={this.handleChange}
                                label='Last Name'
                                required
                            />
                            <FormInput
                                type='text'
                                name='company'
                                value={company}
                                onChange={this.handleChange}
                                label='Company'
                            />
                            <FormInput
                                type='text'
                                name='email'
                                value={email}
                                onChange={this.handleChange}
                                label='Email'
                                required
                            />               
                            <button className="contact-submit-btn">Submit</button>
                        </form>
                    </div>
                    <div className="contact-background"></div>
                </div>
        )
    }
    
}

export default Contact;