import React from "react";
import "./Skills.css";
import { SkillsItem } from "./components/SkillsItem";
import { skillsList } from '../../../../shared/projectData'

export const Skills = () => {

	const skills = skillsList.map(item => {
		return (
			<SkillsItem
				key={item.id}
				image={item.img}
				alt={item.title}
				title={item.title}
				text={item.text}
			/>
		)
	})

    return (
        <section className="skills">
            <div className="container">
                <h1 className="skills__title title">Skills</h1>
                <div className="skills__container"> {skills} </div>
            </div>
        </section>
    );
};
