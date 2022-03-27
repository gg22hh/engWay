import React, { useState } from "react";
import "./TaskInner.css";
import audio from "../../../../assets/audios/two-brothers.mp3";

export const TaskInner = () => {
    const [words, setWords] = useState(true);

    return (
        <div className="taskInner">
            <div className="taskInner__audio">
                <audio controls>
                    <source src={audio} type="audio/mpeg" />
                </audio>
            </div>

            <p className="taskInner__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                placeat! Animi possimus doloremque eaque ut, repudiandae
                cupiditate eius vitae excepturi eveniet debitis natus. Dolorum
                aliquid praesentium molestiae, soluta quas fuga!
            </p>

            <button onClick={() => setWords(true)} className="taskInner__btn">
                Show Words
            </button>

            {words && (
                <ol className="taskInner__list">
                    <li className="taskInner__list-item">
                        night - [naɪt] - ночь
                    </li>
                    <li className="taskInner__list-item">
                        night - [naɪt] - ночь
                    </li>
                    <li className="taskInner__list-item">
                        night - [naɪt] - ночь
                    </li>
                    <li className="taskInner__list-item">
                        night - [naɪt] - ночь
                    </li>
                    <li className="taskInner__list-item">
                        night - [naɪt] - ночь
                    </li>
                    <li className="taskInner__list-item">
                        night - [naɪt] - ночь
                    </li>
                    <li className="taskInner__list-item">
                        night - [naɪt] - ночь
                    </li>
                    <li className="taskInner__list-item">
                        night - [naɪt] - ночь
                    </li>
                    <li className="taskInner__list-item">
                        night - [naɪt] - ночь
                    </li>
                </ol>
            )}
        </div>
    );
};
