import React, { useState } from "react";
import { useDataFromServer } from "../../shared/hooks";
import { READING_URL } from "../../shared/projectData";
import { ReadingTask } from "./components/ReadingTask/ReadingTask";
import "./Reading.css";
import loadingGif from "../../assets/images/loading-gif.gif";
import { Link } from "react-router-dom";
import bg from "../../assets/images/reading/reading-bg.png";

export const Reading = () => {
    const [reading, isLoading] = useDataFromServer(READING_URL);
    const initialState = {
        task1: false,
        task2: false,
        task3: false,
        task4: false,
        task5: false,
    };
    const [show, setShow] = useState(initialState);

    return (
        <div className="reading">
            <div className="container">
                <div className="listening__nav">
                    <div className="listening__nav-home">
                        <Link to={"/"}>Home</Link>
                    </div>
                    <div className="listening__nav-next">
                        <Link to={"/reading"}>Reading</Link>
                    </div>
                </div>
                <div className="reading__tasks">
                    {isLoading ? (
                        <img
                            className="loadingGif"
                            src={loadingGif}
                            alt="loading..."
                        />
                    ) : (
                        <>
                            <div className="reading__tasks-top">
                                <div className="reading__tasks-titles">
                                    {reading.map((task) => (
                                        <div
                                            className="reading__tasks-title"
                                            key={task.id}
                                            onClick={() =>
                                                setShow({
                                                    ...initialState,
                                                    [`task${task.id}`]: true,
                                                })
                                            }
                                        >
                                            {task.title}
                                        </div>
                                    ))}
                                </div>
                                <div className="reading__task-image">
                                    <img src={bg} alt="" />
                                </div>
                            </div>

                            <div className="reading__tasks-text">
                                {reading.map(
                                    (task) =>
                                        show[`task${task.id}`] && (
                                            <ReadingTask
                                                key={task.id}
                                                text={task.text}
                                                title={task.title}
                                            />
                                        )
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
