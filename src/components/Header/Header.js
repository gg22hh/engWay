import React, { useState } from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../../assets/images/header-logo.png";
import { Link, NavLink } from "react-router-dom";

export const Header = ({ setActiveLoginForm, userName, darkTheme }) => {
    const [burgerActive, setBurgerActive] = useState(false);

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
                            <Link to="/">
                                <img src={logo} alt="" />
                            </Link>
                        ) : (
                            <Link to="/">
                                Eng<span>Way</span>
                            </Link>
                        )}
                    </div>
                    <nav className="header__navigation">
                        <span>
                            <NavLink to="/">Home</NavLink>
                        </span>
                        <span>
                            <NavLink to="/listening">Listening</NavLink>
                        </span>
                        <span>
                            <NavLink to="/reading">Reading</NavLink>
                        </span>
                        <span>
                            <NavLink to="/grammar">Grammar</NavLink>
                        </span>
                    </nav>
                    {userName.length > 0 ? (
                        <div className="header__user">
                            {userName}
                            <Link to="/">
                                <PersonIcon />
                            </Link>
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
                            <Link to="/">
                                Eng<span>Way</span>
                            </Link>
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
