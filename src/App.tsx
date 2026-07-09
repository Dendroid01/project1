import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import './App.css'

function App() {

    return (
        <div className="w-full bg-white">
            <div className="max-w-7xl bg-white mx-auto  min-h-screen relative">
                <Header/>
                <Hero/>
                <About/>
                <Contact/>
            </div>
        </div>

    )
}

export default App
