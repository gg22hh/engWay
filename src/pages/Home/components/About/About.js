import React from 'react'
import './About.css'
import img from '../../../../assets/images/about.png'

export const About = () => {
	return (
        <section className="about">
            <div className="container">
                <div className="about__inner">
                    <div className="about__container">
                        <h1 className="about__title title">About Us</h1>
                        <div className="about__text">
                            The model offers a framework for discussing problems
                            related to the user's experience, as well as
                            possible ways and means of solving them. Application
                            development begins at the top level (strategy),
                            where the future software product is described quite
                            abstractly from the point of view of the
                            expectations of both users and the customer.
                        </div>
                        <div className="about__info">
                            <div className="about__info-pupils">
                                <span>800</span>
                                <p>Pupils</p>
                            </div>
                            <div className="about__info-teachers">
                                <span>18</span>
                                <p>Teachers</p>
                            </div>
                            <div className="about__info-languages">
                                <span>1</span>
                                <p>Languages</p>
                            </div>
                        </div>
                    </div>
					<div className="about__image">
						<img src={img} alt="About image" />
					</div>
                </div>
            </div>
        </section>
    );
}
