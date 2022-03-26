import { useState } from 'react';
import "./App.css";
import { Header } from "./components/Header/Header";
import { About } from "./pages/Home/components/About/About";
import { Footer } from "./components/Footer/Footer";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home/Home';
import {Listening} from './pages/Listening/Listening'
import { Reading } from "./pages/Reading/Reading";
import { Grammar } from "./pages/Grammar/Grammar";

function App() {
	const [activeLoginForm, setActiveLoginForm] = useState(false)
	const [darkTheme, setDarkTheme] = useState(
		localStorage.getItem('theme') === 'true' 
	)
	const [userName, setUserName] = useState('')


    return (
        <div className={darkTheme ? "App dark" : "App"}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout
                            activeLoginForm={activeLoginForm}
                            setActiveLoginForm={setActiveLoginForm}
                            userName={userName}
                            darkTheme={darkTheme}
                            setDarkTheme={setDarkTheme}
                        />
                    }
                >
                    <Route
                        index
                        element={
                            <Home
                                userName={userName}
                                setActiveLoginForm={setActiveLoginForm}
                            />
                        }
                    />
                    <Route path="listening" element={<Listening />} />
                    <Route path="reading" element={<Reading />} />
                    <Route path="grammar" element={<Grammar />} />
                </Route>
            </Routes>

            {/* <Header
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
            <Footer darkTheme={darkTheme} /> */}
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
