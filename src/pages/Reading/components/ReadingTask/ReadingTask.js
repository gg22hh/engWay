import React, { useState } from "react";
import { translatedWords } from "../../../../shared/projectData";

export const ReadingTask = ({ text, title }) => {
    const [show, setShow] = useState(false);
    const [s, setS] = useState();
    const keys = Object.keys(translatedWords);

    let word = "";
    const translateWord = (e) => {
        word = e.target.textContent.toLowerCase();
        for (let i = 0; i < keys.length; i++) {
            if (word.toLowerCase() === keys[i]) {
                setS(translatedWords[keys[i]]);
            }
        }
    };

    const newText = text.split(" ").map((word, i) => {
        return (
            <button onClick={translateWord} key={i}>
                {word}
            </button>
        );
    });
    console.log(newText);

    return (
        <div className="reading__task">
            <h2 onClick={() => setShow(!show)} className="reading__task-title">
                {title}
            </h2>
            {show && (
                <>
                    <div className="reading__task-text">{newText}</div>
                    <h3 className="reading__task-word">{s}</h3>
                </>
            )}
        </div>
    );
};
