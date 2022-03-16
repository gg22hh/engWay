import React from "react";
import "./Header.css";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
						<a href="#">Eng<span>Way</span> </a>
					</div>
					<nav className="header__navigation">
						<a href="#">Listening</a>
						<a href="#">Reading</a>
						<a href="#">Grammar</a>
					</nav>
					<div className="header__login">Log in</div>
                </div>
            </div>
        </header>
    );
};
