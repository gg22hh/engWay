import React from "react";
import "./Footer.css";
import logo from "../../assets/images/header-logo.png";

export const Footer = ({ darkTheme }) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    {darkTheme ? (
                        <img src={logo} alt="" />
                    ) : (
                        <a href="#" className="footer__logo">
                            Eng<span>Way</span>
                        </a>
                    )}

                    <ul className="footer__list">
                        <li className="footer__list-item">
                            <a href="#">Terms and Conditions</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li className="footer__list-item">
                            <a href="#">Cookie Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
