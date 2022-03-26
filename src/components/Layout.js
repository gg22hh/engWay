import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const Layout = ({
    activeLoginForm,
    setActiveLoginForm,
    userName,
    darkTheme,
    setDarkTheme,
}) => {
    return (
        <>
            <Header
                activeLoginForm={activeLoginForm}
                setActiveLoginForm={setActiveLoginForm}
                userName={userName}
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme}
            />

            <div className="content">
                <div className="container">
                    <Outlet />
                </div>
            </div>

            <Footer darkTheme={darkTheme} />
        </>
    );
};
