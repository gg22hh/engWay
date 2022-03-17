import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";

export const Header = ({ setActiveLoginForm, userName }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="#">
                            Eng<span>Way</span>{" "}
                        </a>
                    </div>
                    <nav className="header__navigation">
                        <a href="#">Listening</a>
                        <a href="#">Reading</a>
                        <a href="#">Grammar</a>
                    </nav>
                    {userName.length > 0 ? (
                        <div className="header__user">
                            {userName} <a href="#"><PersonIcon /></a>
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
            </div>
        </header>
    );
};
