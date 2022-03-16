import './App.css';
import { Header } from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { Skills } from './components/Skills/Skills';
import { About } from './components/About/About';

function App() {
  return (
    <div className="App">
		<Header />
		<Banner />
		<Skills />
		<About />
    </div>
  );
}

export default App;
