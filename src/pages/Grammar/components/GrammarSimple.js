import React, { useState } from "react";
import { GrammarTest } from "./GrammarTest";

export const GrammarSimple = ({
    title,
    text1,
    subtitle,
    text2,
    rightAnswers,
    tasks,
}) => {
    const [show, setShow] = useState(false);
    return (
        <div className="grammar__task">
            <h2 onClick={() => setShow(!show)} className="grammar__task-title">
                {title}
            </h2>
            {show && (
                <>
                    <div className="grammar__task-text">{text1}</div>
                    <h3 className="grammar__task-subtitle">{subtitle}</h3>
                    <div className="grammar__task-text">{text2}</div>
                    <GrammarTest rightAnswers={rightAnswers} tasks={tasks} />
                </>
            )}
        </div>
    );
};
