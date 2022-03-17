import React from 'react'
import './LoginForm.css'

export const LoginForm = ({ setActiveLoginForm, userName, setUserName }) => {

	const handleFormClick = (e) => {
		e.preventDefault()

		setActiveLoginForm(false)
	}

	const closeForm = () => {
		setActiveLoginForm(false);
	}

    return (
        <>
            <form onSubmit={handleFormClick} className="form">
                <h1 className="form__title title">Войти</h1>
                <div>
                    <input
                        type="text"
                        value={userName}
						onChange={(e) => setUserName(e.target.value)}
                        placeholder="Login"
						maxLength="10"
                        required
                    />
                </div>
                <div>
                    <input type="password" placeholder="Password" required />
                </div>
                <div>
                    <button className="form__btn">Отправить</button>
                </div>
                <button onClick={closeForm} className="form__close">
                    &#10008;
                </button>
            </form>
            <div onClick={closeForm} className="overlay"></div>
        </>
    );
};
