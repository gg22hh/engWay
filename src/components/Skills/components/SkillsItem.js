import React from 'react'

export const SkillsItem = ({ image, alt, title, text }) => {
	return (
        <div className="skills__item">
            <div className="skills__item-image">
                <img src={image} alt={alt} />
            </div>
            <h3 className="skills__item-title sub-title">{title}</h3>
            <div className="skills__item-text">
                {text}
            </div>
			<div><button className="skills__item-button">Learn more</button></div>
			
        </div>
    );
}
