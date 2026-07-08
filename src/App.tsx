import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import './App.css'
function App() {

  return (
    <div className="w-full bg-white mx-auto  min-h-screen relative">
        <Header />
        <Hero />
        <About />
    </div>
  )
}

export default App
