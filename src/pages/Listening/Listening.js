import React, { useState } from "react";
import "./Listening.css";
import { TaskInner } from "./components/TaskInner/TaskInner";
import { Link } from "react-router-dom";
import banner from "../../assets/images/listening/banner.png";

export const Listening = () => {
    const [theme, setTheme] = useState(false);
    const [theme1, setTheme1] = useState(false);
    const [theme2, setTheme2] = useState(false);
    const [theme3, setTheme3] = useState(false);

    return (
        <section className="listening">
            <div className="container">
                <div className="listening__nav">
                    <div className="listening__nav-home">
                        <Link to={"/"}>Home</Link>
                    </div>
                    <div className="listening__nav-next">
                        <Link to={"/listening"}>Listening</Link>
                    </div>
                </div>
                <h1 className="listening__title">Listening</h1>
                <div className="listening__banner">
                    <img src={banner} alt="" />
                </div>
                <div className="listening__list">
                    <ol className="listening__tasks">
                        <li className="tasks__item">
                            <h2
                                className="tasks__item-title"
                                onClick={() => setTheme(!theme)}
                            >
                                Name of the theme
                            </h2>
                            {theme ? <TaskInner /> : null}
                        </li>
                        <li className="tasks__item">
                            <h2
                                className="tasks__item-title"
                                onClick={() => setTheme1(!theme1)}
                            >
                                Name of the theme
                            </h2>
                            {theme1 ? <TaskInner /> : null}
                        </li>
                        <li className="tasks__item">
                            <h2
                                className="tasks__item-title"
                                onClick={() => setTheme2(!theme2)}
                            >
                                Name of the theme
                            </h2>
                            {theme2 ? <TaskInner /> : null}
                        </li>
                        <li className="tasks__item">
                            <h2
                                className="tasks__item-title"
                                onClick={() => setTheme3(!theme3)}
                            >
                                Name of the theme
                            </h2>
                            {theme3 ? <TaskInner /> : null}
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
};
