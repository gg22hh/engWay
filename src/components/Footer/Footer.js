import React from 'react'
import './Footer.css'

export const Footer = () => {
	return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <a href="#" className="footer__logo">
                        Eng<span>Way</span>
                    </a>
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
}
