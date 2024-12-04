import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// Context
import { useLanguage } from './context/LanguageContext'; // Import useLanguage hook

// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';

// Components
import Clients from './components/Clients';
import Intro from './components/Intro';
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { language, toggleLanguage, translations } = useLanguage();

  // Log current language to check if it's changing
  console.log(`App language: ${language}`);

  // Access the translations for the current language
  const currentTranslation = translations[language];
  console.log(currentTranslation); // Log the translation for debugging

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    };

    window.addEventListener('load', () => {
      aos_init();
    });

    // Apply dark-mode or light-mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useDocTitle("GARMET | Webpage");

  return (
    <div>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <button onClick={toggleLanguage}>
        {currentTranslation ? currentTranslation.toggleLanguage : 'Switch Language'}
      </button>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;