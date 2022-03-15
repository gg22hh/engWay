import React from "react";
import "./Header.css";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="#">EngWay</a>
                    </div>
                    <button className="header__btn">
                        <button>Вход</button>
                    </button>
                </div>
            </div>
        </header>
    );
};
