import { useState } from 'react';
import "./App.css";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Skills } from "./components/Skills/Skills";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { LoginForm } from "./components/LoginForm/LoginForm";

function App() {
	const [activeLoginForm, setActiveLoginForm] = useState(false)
	const [darkTheme, setDarkTheme] = useState(
		localStorage.getItem('theme') === 'true'
	)
	const [userName, setUserName] = useState('')


    return (
        <div className={darkTheme ? "App dark" : "App"}>
            <Header
                activeLoginForm={activeLoginForm}
                setActiveLoginForm={setActiveLoginForm}
                userName={userName}
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme}
            />
            <Banner
                userName={userName}
                setActiveLoginForm={setActiveLoginForm}
            />
            <Skills />
            <About />
            <Contact />
            <Footer darkTheme={darkTheme} />
            {activeLoginForm && (
                <LoginForm
                    setActiveLoginForm={setActiveLoginForm}
                    userName={userName}
                    setUserName={setUserName}
                />
            )}
        </div>
    );
}

export default App;
