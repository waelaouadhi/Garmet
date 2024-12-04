import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for the language
const LanguageContext = createContext();

// Translation strings for English and French
const translations = {
  en: {
    welcome: "Welcome to our website",
    contact: "Contact",
    demoProduct: "Get Demo",
    toggleLanguage: "Switch to French",
    heroTitle: "Empowering Industries with Cutting-Edge Electrical Solutions.",
    heroDescription: "We are a dedicated team delivering innovative electrical solutions and high-performance components. GARMET ensures reliable systems with live motherboard diagnostics and expert maintenance.",
    learnMore: "Learn More",
    introTitle: "Welcome to GARMET",
    introParagraph1: "We are a dedicated team delivering innovative electrical solutions and high-performance components.",
    introParagraph2: "GRAMMET ensures reliable systems with live motherboard diagnostics and expert maintenance to power your business forward.",
    contactUs: "Contact us",
  },
  fr: {
    welcome: "Bienvenue sur notre site",
    contact: "Contact",
    demoProduct: "Obtenir une démo",
    toggleLanguage: "Passer à l'anglais",
    heroTitle: "Renforcer les industries avec des solutions électriques de pointe.",
    heroDescription: "Nous sommes une équipe dédiée à la fourniture de solutions électriques innovantes et de composants haute performance. GARMET garantit des systèmes fiables avec des diagnostics en direct des cartes mères et une maintenance experte.",
    learnMore: "En savoir plus",
    introTitle: "Bienvenue chez GARMET",
    introParagraph1: "Nous sommes une équipe dédiée à la fourniture de solutions électriques innovantes et de composants haute performance.",
    introParagraph2: "GRAMMET garantit des systèmes fiables avec des diagnostics en direct des cartes mères et une maintenance experte pour propulser votre entreprise.",
    contactUs: "Contactez-nous",
  }
};

// Language Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en'); // Default is English, or get saved language

  useEffect(() => {
    console.log(`Current language: ${language}`); // Debugging log
    if (!translations[language]) {
      setLanguage('en'); // Fallback to English if the language is not found
    }
  }, [language]);

  // Toggle between English and French
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    console.log(`Toggling language to: ${newLanguage}`); // Debugging log
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage); // Save selected language in localStorage
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook for accessing the LanguageContext
export const useLanguage = () => useContext(LanguageContext);