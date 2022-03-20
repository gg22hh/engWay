import React, { useState } from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import logo from "../../assets/images/header-logo.png";

export const Header = ({
    setActiveLoginForm,
    userName,
    darkTheme,
    setDarkTheme,
}) => {
    const [burgerActive, setBurgerActive] = useState(false);
    const color = darkTheme ? "yellow" : "blue";

	const changeTheme = () => {
		localStorage.setItem("theme", !darkTheme);
		setDarkTheme(!darkTheme)
	}

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
                        &#10008;
                    </button>
                    <div className="header__logo">
                        {darkTheme ? (
                            <img src={logo} alt="" />
                        ) : (
                            <a href="#">
                                Eng<span>Way</span>
                            </a>
                        )}

                        <button onClick={changeTheme} className="header__theme">
                            <BrightnessMediumIcon style={{ fill: color }} />
                        </button>
                    </div>
                    <nav className="header__navigation">
                        <a href="#">Home</a>
                        <a href="#">Listening</a>
                        <a href="#">Reading</a>
                        <a href="#">Grammar</a>
                    </nav>
                    {userName.length > 0 ? (
                        <div className="header__user">
                            {userName}
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
                        {darkTheme ? (
                            <img src={logo} alt="" />
                        ) : (
                            <a href="#">
                                Eng<span>Way</span>
                            </a>
                        )}
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
