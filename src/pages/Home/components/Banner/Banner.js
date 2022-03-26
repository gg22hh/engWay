import React from "react";
import "./Banner.css";
import banner from "../../../../assets/images/banner/banner.png";

export const Banner = ({ setActiveLoginForm, userName }) => {

	const handleClickBannerButton = () => {
		userName.length > 0 ? alert('already logged in') : setActiveLoginForm(true)
	}

    return (
        <section className="banner">
            <div className="container">
                <div className="banner__inner">
                    <div className="banner__content">
                        <h1 className="banner__title title">
                            Learn <br /> Any Foreign Language
                        </h1>
                        <div className="banner__text">
                            With our teachers who write a program for each
                            student, you will be able to make your first sketch
                            after the first
                        </div>
                        <button
                            onClick={handleClickBannerButton}
                            className="banner__button"
                        >
                            Get started
                        </button>
                    </div>
                    <div className="banner__image">
                        <img src={banner} alt="Banner image" />
                    </div>
                </div>
            </div>
        </section>
    );
};
