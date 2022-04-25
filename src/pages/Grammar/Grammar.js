import React from "react";
import { simples } from "../../shared/projectData";
import { GrammarSimple } from "./components/GrammarSimple";
import "./Grammar.css";

export const Grammar = () => {
    const grammarList = simples.map((item) => {
        return (
            <GrammarSimple
                key={item.id}
                title={item.title}
                text1={item.text1}
                subtitle={item.subtitle}
                text2={item.text2}
                rightAnswers={item.rigthAnswers}
                tasks={item.tasks}
            />
        );
    });
    return (
        <div className="grammar">
            <div className="container">
                <div className="grammar__inner">{grammarList}</div>
            </div>
        </div>
    );
};
