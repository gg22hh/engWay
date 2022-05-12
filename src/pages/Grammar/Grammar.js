import React, { useState } from "react";
import { Link } from "react-router-dom";
import { simples } from "../../shared/projectData";
import "./Grammar.css";
import grammarBg from "../../assets/images/grammar/grammar-banner.png";
import { GrammarTest } from "./components/GrammarTest";

export const Grammar = () => {
    const initialState = {
        simple1: false,
        simple2: false,
        simple3: false,
        simple4: false,
        simple5: false,
    };
    const [show, setShow] = useState(initialState);
    return (
        <div className="grammar">
            <div className="container">
                <div className="listening__nav">
                    <div className="listening__nav-home">
                        <Link to={"/"}>Home</Link>
                    </div>
                    <div className="listening__nav-next">
                        <Link to={"/grammar"}>Grammar</Link>
                    </div>
                </div>
                <div className="grammar__inner">
                    <div className="grammar__banner">
                        <h1 className="grammar__title">Grammar</h1>
                        <img src={grammarBg} alt="" />
                    </div>
                    <div className="grammar__simples">
                        <div className="grammar__tasks">
                            {simples.map((item) => (
                                <div
                                    onClick={() =>
                                        setShow({
                                            ...initialState,
                                            [`simple${item.id}`]: true,
                                        })
                                    }
                                    key={item.id}
                                    className="grammar__task"
                                >
                                    {item.title}
                                </div>
                            ))}
                        </div>
                        <div className="grammar__text">
                            {simples.map(
                                (item) =>
                                    show[`simple${item.id}`] && (
                                        <>
                                            <div className="grammar__task-text">
                                                {item.text1}
                                            </div>
                                            <p className="grammar__task-subtitle">
                                                {item.subtitle}
                                            </p>
                                            <div className="grammar__task-text">
                                                {item.text2}
                                            </div>
                                        </>
                                    )
                            )}
                        </div>
                    </div>
                    <div className="grammar__test">
                        {simples.map(
                            (item) =>
                                show[`simple${item.id}`] && (
                                    <GrammarTest
                                        rightAnswers={item.rigthAnswers}
                                        tasks={item.tasks}
                                    />
                                )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
