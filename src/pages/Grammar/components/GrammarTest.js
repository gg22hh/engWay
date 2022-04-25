import React, { useState } from "react";
import { presentSimple, rightAnswers } from "../../../shared/projectData";
import { GrammarTestTask } from "./GrammarTestTask";

export const GrammarTest = () => {
    const [answers, setAnswers] = useState({
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
    });
    const [showAnswers, setShowAnswers] = useState(false);
    const [rightAnswersCount, setRigthAnswersCount] = useState(0);
    const [falseAnswersCount, setFalseAnswersCount] = useState(0);
    const handleClick = () => {
        setShowAnswers(true);
        const usersAnswers = rightAnswers.map((ans, index) => {
            return ans === answers[index + 1] && true;
        });
        let rigthAns = 0;
        let falseAns = 0;
        for (let i = 0; i < usersAnswers.length; i++) {
            if (usersAnswers[i] === true) {
                rigthAns += 1;
            } else {
                falseAns += 1;
            }
        }
        setRigthAnswersCount(rigthAns);
        setFalseAnswersCount(falseAns);
    };
    const grammarTaskList = presentSimple.map((item) => {
        return (
            <GrammarTestTask
                key={item.id}
                id={item.id}
                text={item.text}
                answer1={item.answer1}
                answer2={item.answer2}
                setAnswers={setAnswers}
                answers={answers}
            />
        );
    });

    return (
        <>
            <div className="grammar__test">
                <h2 className="grammar__test-title">TEST</h2>
                {grammarTaskList}
            </div>
            <button onClick={handleClick} className="grammar__button">
                Поверить
            </button>
            <div className="grammar__answers">
                {showAnswers && (
                    <>
                        <div>Right Answers: {rightAnswersCount}</div>
                        <div>False Answers: {falseAnswersCount}</div>
                    </>
                )}
            </div>
        </>
    );
};
