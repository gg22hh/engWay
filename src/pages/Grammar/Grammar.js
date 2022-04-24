import React from "react";
import { GrammarTest } from "./components/GrammarTest";

export const Grammar = () => {
    return (
        <div className="grammar">
            <div className="container">
                <div className="grammar__inner">
                    <div className="grammar__task">
                        <h2 className="grammar__task-title">
                            PRESENT SIMPLE – ПРОСТОЕ НАСТОЯЩЕЕ ВРЕМЯ
                        </h2>
                        <div className="grammar__task-text">
                            Present Simple – простое настоящее время в
                            английском языке. Оно выражает действие, которое
                            происходит в настоящем времени или регулярно. Также
                            оно используется для выражения действия без указания
                            определенного времени:
                            <ul>
                                <li>- I work at home.</li>
                                <li>- Bakery is a good business.</li>
                                <li>- Jill speaks four languages fluently.</li>
                                <li>- On Sundays, we like to fish.</li>
                            </ul>
                        </div>
                        <h3 className="grammar__task-subtitle">
                            Как образуется Present Simple
                        </h3>
                        <div className="grammar__task-text">
                            Present Simple образуется очень просто: убираем у
                            глагола в инфинитиве частицу to и ставим его на
                            второе место в предложении, после подлежащего. Для
                            третьего лица (“he,” “she,” “it”), добавляем глаголу
                            окончание “—s“, “—es“, если глагол оканчивается на
                            гласную, или “—ies“, если глагол заканчивается на ”
                            y” (to try“, “to cry“, “to bury“)
                        </div>
                        <GrammarTest />
                    </div>
                </div>
            </div>
        </div>
    );
};
