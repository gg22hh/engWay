import React, { useState } from "react";
import { GrammarTestTask } from "./GrammarTestTask";

export const GrammarTest = () => {
    const [answers, setAnswers] = useState({
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
    });
    console.log(answers);
    return (
        <div className="grammar__test">
            <h2 className="grammar__test-title">TEST</h2>
            <GrammarTestTask
                text="I .... Spanish with my sister."
                answer1="study"
                answer2="studies"
                id={1}
                setAnswers={setAnswers}
                answers={answers}
            />
            <GrammarTestTask
                text="My sister .... a shower every morning."
                answer1="take"
                answer2="takes"
                id={2}
                setAnswers={setAnswers}
                answers={answers}
            />
            <GrammarTestTask
                text="This house .... to my grandmother."
                answer1="belong"
                answer2="belongs"
                id={3}
                setAnswers={setAnswers}
                answers={answers}
            />
            <GrammarTestTask
                text="We .... to go for a walk in the morning."
                answer1="like"
                answer2="likes"
                id={4}
                setAnswers={setAnswers}
                answers={answers}
            />
            <GrammarTestTask
                text="My husband and I .... a lot of money on books."
                answer1="spend"
                answer2="spends"
                id={5}
                setAnswers={setAnswers}
                answers={answers}
            />
        </div>
    );
};
