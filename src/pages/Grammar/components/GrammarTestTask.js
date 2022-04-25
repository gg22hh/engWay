import React, { useState } from "react";

export const GrammarTestTask = ({
    text,
    answer1,
    answer2,
    id,
    setAnswers,
    answers,
}) => {
    const [ans, setAns] = useState("....");
    const textArr = text.split(" ");
    textArr[textArr.indexOf("....")] = ans;
    const newText = textArr.join(" ");
    const handleCLick = (e) => {
        setAns(e.target.value);
    };
    return (
        <div className="grammar__test-question1">
            {id}. {newText}
            <div className="grammar__test-answers">
                <input
                    name={`question${id}`}
                    type="radio"
                    onChange={(e) => handleCLick(e)}
                    value={answer1}
                    onClick={() => setAnswers({ ...answers, [id]: answer1 })}
                />
                <span>{answer1}</span>
            </div>
            <div className="grammar__test-answers">
                <input
                    name={`question${id}`}
                    type="radio"
                    onChange={handleCLick}
                    value={answer2}
                    onClick={() => setAnswers({ ...answers, [id]: answer2 })}
                />
                <span>{answer2}</span>
            </div>
        </div>
    );
};
