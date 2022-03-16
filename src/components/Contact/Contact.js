import React from 'react'
import './Contact.css'
import img from '../../assets/images/contact.png'

export const Contact = () => {
	return (
        <section className="contact">
            <div className="container">
                <div className="contact__inner">
                    <div className="contact__image">
                        <img src={img} alt="Contact image" />
                    </div>
                    <div className="contact__container">
                        <h1 className="contact__title title">Contact Us</h1>
                        <div className="contact__text">
                            Discover your current English level by taking our
                            free online English test.Sign up to our newsletter
                            for learning tips and free resources
                        </div>
						<form action="#" className="contact__form">
							<input type="text" placeholder='Enter Your E-mail' required/>
							<button type="submit">Subscribe</button>
						</form>
                    </div>
                </div>
            </div>
        </section>
    );
}
