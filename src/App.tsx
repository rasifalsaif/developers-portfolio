import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';
import './styles/theme.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
