import React, { useState } from "react";
import "./TaskInner.css";

export const TaskInner = ({ audio, text, words }) => {
    const [showWords, setWords] = useState(false);
    const values = Object.values(words);
    const list = values.map((word, index) => {
        return (
            <li className="taskInner__list-item">
                <div>{index + 1}</div>
                <div key={index}>{word}</div>
            </li>
        );
    });

    return (
        <div className="taskInner">
            <div className="taskInner__audio">
                <audio controls>
                    <source src={audio} type="audio/mpeg" />
                </audio>
            </div>

            <p className="taskInner__text">{text}</p>

            <button
                onClick={() => setWords(!showWords)}
                className="taskInner__btn"
            >
                Show Words
            </button>

            {showWords && <ul className="taskInner__list">{list}</ul>}
        </div>
    );
};
