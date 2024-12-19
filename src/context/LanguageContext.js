import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for the language
const LanguageContext = createContext();

// Translation strings for English and French
const translations = {
  en: {
    welcome: "Welcome to our website",
    contact: "Contact",
    demoProduct: "Get Demo",
   
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
  
    heroTitle: "Renforcer les industries avec des solutions électriques de pointe.",
    heroDescription: "Chez GARMET, nous proposons une gamme complète de services spécialisés en maintenance industrielle pour garantir la performance et la durabilité de vos équipements. Découvrez ci-dessous nos principales prestations .",
    learnMore: "En savoir plus",
    introTitle: "Bienvenue chez GARMET",
    introParagraph1: "Chez GARMET, nous considérons chaque client comme un véritable partenaire. Spécialisés dans la maintenance électronique industrielle, nous offrons des services sur-mesure pour garantir la performance et la durabilité de vos équipements. ",
    introParagraph2: "Nous réparons et entretenons une large gamme d’équipements électroniques industriels, tels que cartes de commande, cartes de puissance, drivers pour moteurs pas à pas, automates programmables industriels, onduleurs ASI, servo drives, variateurs de vitesse, et bien plus encore.Notre engagement va au-delà de la simple maintenance : nous vous apportons également des conseils techniques adaptés à vos besoins spécifiques, ainsi qu’un support technique réactif et personnalisé. Grâce à notre expertise, nous vous aidons à optimiser vos installations tout en assurant leur bon fonctionnement.Avec GARMET, vous bénéficiez d’une collaboration basée sur la fiabilité, l'innovation et un service de proximité, faisant de nous un partenaire stratégique pour la réussite de vos projets industriels.",
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