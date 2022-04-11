import React, { useState } from "react";
import { TaskInner } from "./TaskInner";

export const TasksItem = ({ id, title, audio, text, words }) => {
    const [theme, setTheme] = useState(false);

    return (
        <div className="tasks__item">
            <h2 className="tasks__item-title" onClick={() => setTheme(!theme)}>
                {id} {title}
            </h2>
            {theme ? (
                <TaskInner audio={audio} text={text} words={words} />
            ) : null}
        </div>
    );
};
