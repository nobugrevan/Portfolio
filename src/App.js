import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { IoArrowUp } from 'react-icons/io5';

function App() {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light_theme') {
      document.body.classList.remove('dark_theme');
      document.body.classList.add('light_theme');
    } else {
      document.body.classList.remove('light_theme');
      document.body.classList.add('dark_theme');
    }

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <article className="container">
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </article>
      </main>
      <Footer />

      <a 
        href="#top" 
        className={`go-top ${showGoTop ? 'active' : ''}`} 
        data-go-top 
        title="Go to Top"
      >
        <IoArrowUp />
      </a>
    </div>
  );
}

export default App;