import { useState, useEffect } from 'react';
import { IoPersonCircle, IoMail, IoCall, IoChatbubbles, IoArrowUp } from 'react-icons/io5';
import { 
  IoLogoFacebook, 
  IoLogoTwitter, 
  IoLogoLinkedin, 
  IoLogoYoutube 
} from 'react-icons/io';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('light_theme');
    document.body.classList.toggle('dark_theme');
    localStorage.setItem('theme', isDarkTheme ? 'light_theme' : 'dark_theme');
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.body.classList.toggle('active');
  };

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        <h1 className="h1 logo">
          <a href="#">nobugrevan<span>.</span></a>
        </h1>

        <div className="navbar-actions">
          <select name="language" id="lang">
            <option value="en">En</option>
            <option value="ar">Ar</option>
          </select>

          <button 
            className={`theme-btn ${isDarkTheme ? '' : 'active'}`} 
            aria-label="Change Theme" 
            title="Change Theme" 
            onClick={toggleTheme}
          >
            <span className="icon"></span>
          </button>
        </div>

        <button 
          className={`nav-toggle-btn ${isNavOpen ? 'active' : ''}`} 
          aria-label="Toggle Menu" 
          title="Toggle Menu" 
          onClick={toggleNav}
        >
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li><a href="#home" className="navbar-link" onClick={toggleNav}>Home.</a></li>
            <li><a href="#about" className="navbar-link" onClick={toggleNav}>About.</a></li>
            <li><a href="#skills" className="navbar-link" onClick={toggleNav}>Skills.</a></li>
            <li><a href="#portfolio" className="navbar-link" onClick={toggleNav}>Portfolio.</a></li>
            <li><a href="#contact" className="navbar-link" onClick={toggleNav}>Contact.</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;