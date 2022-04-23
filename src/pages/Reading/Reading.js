import React from "react";
import { useDataFromServer } from "../../shared/hooks";
import { READING_URL } from "../../shared/projectData";
import { ReadingTask } from "./components/ReadingTask/ReadingTask";
import "./Reading.css";
import loadingGif from "../../assets/images/loading-gif.gif";

export const Reading = () => {
    const [reading, isLoading] = useDataFromServer(READING_URL);

    const readingList = reading.map((task) => {
        return (
            <ReadingTask key={task.id} text={task.text} title={task.title} />
        );
    });
    return (
        <div className="reading">
            <div className="container">
                <div className="reading__tasks">
                    {isLoading ? (
                        <img
                            className="loadingGif"
                            src={loadingGif}
                            alt="loading"
                        />
                    ) : (
                        readingList
                    )}
                </div>
            </div>
        </div>
    );
};
