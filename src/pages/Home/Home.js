import React from "react";
import { Banner } from "./components/Banner/Banner";
import { Skills } from "./components/Skills/Skills";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";

export const Home = ({ userName, setActiveLoginForm }) => {
    return (
        <section className="home">
            <Banner
                userName={userName}
                setActiveLoginForm={setActiveLoginForm}
            />
            <Skills />
            <About />
            <Contact />
        </section>
    );
};
