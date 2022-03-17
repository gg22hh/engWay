import React, { useState } from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";

export const Header = ({ setActiveLoginForm, userName }) => {
	const [burgerActive, setBurgerActive] = useState(false)


    return (
        <header className="header">
            <div className="container">
                <div
                    className={
                        burgerActive ? "header__inner active" : "header__inner"
                    }
                >
                    <button
                        onClick={() => setBurgerActive(false)}
                        className="header__close"
                    >
                        {" "}
                        &#10008;
                    </button>
                    <div className="header__logo">
                        <a href="#">
                            Eng<span>Way</span>
                        </a>
                    </div>
                    <nav className="header__navigation">
                        <a href="#">Home</a>
                        <a href="#">Listening</a>
                        <a href="#">Reading</a>
                        <a href="#">Grammar</a>
                    </nav>
                    {userName.length > 0 ? (
                        <div className="header__user">
                            {userName}{" "}
                            <a href="#">
                                <PersonIcon />
                            </a>
                        </div>
                    ) : (
                        <button
                            onClick={() => setActiveLoginForm(true)}
                            className="header__login"
                        >
                            Log in
                        </button>
                    )}
                </div>
                <div
                    className={
                        burgerActive
                            ? "header__overlay active"
                            : "header__overlay"
                    }
                    onClick={() => setBurgerActive(false)}
                ></div>
                <div className="header__adaptive">
                    <div className="header__logo-adaptive">
                        <a href="#">
                            Eng<span>Way</span>
                        </a>
                    </div>
                    <button
                        className={
                            burgerActive
                                ? "header__burger active"
                                : "header__burger"
                        }
                        onClick={() => setBurgerActive(true)}
                    >
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};
