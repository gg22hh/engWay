import React, { useEffect, useState } from "react";
import "./Listening.css";
import { Link } from "react-router-dom";
import banner from "../../assets/images/listening/banner.png";
import { TasksItem } from "./components/TaskInner/TasksItem";

export const Listening = () => {
    const AUDIOS_URL = "https://6254687719bc53e2347e0da5.mockapi.io/Listening";

    const [audios, setAudios] = useState([]);

    useEffect(() => {
        const getAudios = async () => {
            const response = await fetch(AUDIOS_URL);
            if (response.ok) {
                const json = await response.json();
                setAudios(json);
            } else {
                console.log("error");
            }
        };
        getAudios();
    }, [AUDIOS_URL]);

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
                <h1 className="listening__title">Listening</h1>
                <div className="listening__banner">
                    <img src={banner} alt="" />
                </div>
                <div className="listening__list">
                    <ul className="listening__tasks">{audiosList}</ul>
                </div>
            </div>
        </section>
    );
};
