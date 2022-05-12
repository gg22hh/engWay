import React from "react";
import "./Listening.css";
import { Link } from "react-router-dom";
import banner from "../../assets/images/listening/banner.png";
import { TasksItem } from "./components/TaskInner/TasksItem";
import { useDataFromServer } from "../../shared/hooks";
import { AUDIOS_URL } from "../../shared/projectData";
import loadingGif from "../../assets/images/loading-gif.gif";

export const Listening = () => {
    const [audios, isLoading] = useDataFromServer(AUDIOS_URL);

    const audiosList = audios.map((item) => {
        return (
            <TasksItem
                key={item.id}
                id={item.id}
                title={item.title}
                audio={item.audio}
                text={item.text}
                words={item.words}
            />
        );
    });

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
                <div className="listening__inner">
                    <h1 className="listening__title">Listening</h1>
                    <div className="listening__banner">
                        <img src={banner} alt="" />
                    </div>
                    <div className="listening__list">
                        <ul className="listening__tasks">
                            {isLoading ? (
                                <img
                                    className="loadingGif"
                                    src={loadingGif}
                                    alt="loading"
                                />
                            ) : (
                                audiosList
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
