import React, { useState } from "react";
import "./Reading.css";
import audio1 from "../../assets/audios/two-brothers.mp3";

export const Reading = () => {
    const [active, setActive] = useState(false);

    return (
        <section className="reading">
            <div className="container">
                <h1 className="reading__title">Two brothers</h1>
                <div className="reading__audio">
                    <audio controls>
                        <source src={audio1} type="audio/mpeg" />
                    </audio>
                </div>
                <div className="reading__text">
                    <p>
                        Once there were two brothers who inherited their
                        father's land. The two brothers divided the land in half
                        and each one farmed his own section. Over time, the
                        older brother married and had six children, while the
                        younger brother never married.
                    </p>
                    <p>
                        One night, the younger brother lay awake. "It's not fair
                        that each of us has half the land to farm," he thought.
                        "My brother has six children to feed and I have none. He
                        should have more grain than I do.
                    </p>
                    <p>
                        So that night the younger brother went to his silo,
                        gathered a large bundle of wheat, and climbed the hill
                        that separated the two farms and over to his brother's
                        farm. Leaving the wheat in his brother's silo, the
                        younger brother returned home, feeling pleased with
                        himself. Earlier that very same night, the older brother
                        was also lying awake. "It's not fair that each of us has
                        half the land to farm," he thought. "In my old age my
                        wife and I will have our grown children to take care of
                        us, not to mention grandchildren, while my brother will
                        probably have none. He should at least sell more grain
                        from the fields now so he can provide for himself with
                        dignity in his old age.
                    </p>
                </div>
                <button
                    onClick={() => setActive(!active)}
                    className="reading__show"
                >
                    Показать ключивые слова
                </button>
                {active && (
                    <ol className="reading__list">
                        <li className="reading__list-item">
                            night - [naɪt] - ночь
                        </li>
                        <li className="reading__list-item">
                            night - [naɪt] - ночь
                        </li>
                        <li className="reading__list-item">
                            night - [naɪt] - ночь
                        </li>
                        <li className="reading__list-item">
                            night - [naɪt] - ночь
                        </li>
                        <li className="reading__list-item">
                            night - [naɪt] - ночь
                        </li>
                        <li className="reading__list-item">
                            night - [naɪt] - ночь
                        </li>
                        <li className="reading__list-item">
                            night - [naɪt] - ночь
                        </li>
                        <li className="reading__list-item">
                            night - [naɪt] - ночь
                        </li>
                        <li className="reading__list-item">
                            night - [naɪt] - ночь
                        </li>
                    </ol>
                )}
            </div>
        </section>
    );
};
