import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './PagePositioning.css';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import BackgroundCanvas from './components/BackgroundCanvas';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [targetPage, setTargetPage] = useState(null);
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const spatialContainerRef = useRef(null);
  
  // Constantele pentru duratele animațiilor - actualizate pentru noile tranziții
  const ZOOM_OUT_DURATION = 1250; // 1.25s pentru zoom-out, actualizat pentru a coincide cu animația mai lungă
  const ZOOM_IN_DURATION = 1000; // 1s pentru zoom-in, conform CSS
  const ANIMATION_BUFFER = 50; // Buffer redus pentru a asigura finalizarea completă

  // Navigation map with spatial relations - toate paginile sunt vizibile simultan
  const navigationMap = {
    home: {
      name: 'Acasă',
      component: HomePage,
      left: 'services',
      right: 'portfolio',
      down: 'contact'
    },
    services: {
      name: 'Servicii',
      component: ServicesPage,
      right: 'home',
      far_right: 'portfolio'
    },
    portfolio: {
      name: 'Portofoliu',
      component: PortfolioPage,
      left: 'home',
      far_left: 'services'
    },
    contact: {
      name: 'Contact',
      component: ContactPage,
      up: 'home'
    }
  };

  // Funcția de navigare implementează efectul de cameră
  const navigateTo = (page) => {
    if (navigationMap[page] && page !== currentPage && !isTransitioning) {
      // Activează efectul de tranziție
      setIsTransitioning(true);
      setTargetPage(page);
      
      // Faza 1: Zoom out simplu - camera se retrage pentru a vedea tabloul întreg
      if (spatialContainerRef.current) {
        // Resetăm orice clase anterioare de destinație
        spatialContainerRef.current.classList.remove('to-home', 'to-services', 'to-portfolio', 'to-contact');
        
        // Aplicăm clasa de tranziție cu informații despre pagina curentă și pagina țintă
        spatialContainerRef.current.classList.add('transitioning');
        spatialContainerRef.current.setAttribute('data-from', currentPage);
        spatialContainerRef.current.setAttribute('data-to', page);
        document.body.classList.add('navigating');
        
        // Așteaptă până se finalizează zoom-out înainte de a schimba pagina
        setTimeout(() => {
          // Faza 2: Setăm noua pagină (care mută camera în noua poziție)
          setCurrentPage(page);
          updateBackgroundForPage(page);
          
          // Adăugăm clasa to-page pentru a indica destinația animației
          if (spatialContainerRef.current) {
            spatialContainerRef.current.classList.add(`to-${page}`);
          }
          
          // Faza 3: Eliminăm clasa transitioning pentru a permite zoom-in
          setTimeout(() => {
            if (spatialContainerRef.current) {
              spatialContainerRef.current.classList.remove('transitioning');
            }
            
            // Finalizare tranziție
            setTimeout(() => {
              setIsTransitioning(false);
              setTargetPage(null);
              document.body.classList.remove('navigating');
              
              // Eliminăm clasa to-page și atributele data după finalizarea animației
              if (spatialContainerRef.current) {
                spatialContainerRef.current.classList.remove(`to-${page}`);
                spatialContainerRef.current.removeAttribute('data-from');
                spatialContainerRef.current.removeAttribute('data-to');
              }
            }, ZOOM_IN_DURATION + ANIMATION_BUFFER); // Durata zoom-in + buffer
          }, ANIMATION_BUFFER); // Small buffer for proper animation timing
        }, ZOOM_OUT_DURATION + ANIMATION_BUFFER); // Durata zoom-out + buffer
      } else {
        // Fallback în caz că referința nu este disponibilă
        setCurrentPage(page);
        updateBackgroundForPage(page);
        setIsTransitioning(false);
        setTargetPage(null);
      }
    }
  };

  const updateBackgroundForPage = (page) => {
    const colors = {
      home: 'rgba(20, 30, 50, 0.9)',
      services: 'rgba(30, 40, 70, 0.9)',
      portfolio: 'rgba(30, 50, 80, 0.9)',
      contact: 'rgba(25, 35, 60, 0.9)'
    };

    setBackgroundStyle({
      background: `radial-gradient(circle at center, ${colors[page]}, rgba(5, 10, 20, 0.95))`,
      transition: 'background 0.5s ease-out', // Timp redus pentru a se potrivi cu tranziția mai scurtă
    });
  };

  // Main navigation menu
  const renderMainNavigation = () => {
    return (
      <nav className="side-navigation">
        <ul>
          {Object.entries(navigationMap).map(([key, page]) => (
            <li key={key} className={currentPage === key ? 'active' : ''}>
              <button 
                onClick={() => navigateTo(key)}
                disabled={isTransitioning}
                aria-current={currentPage === key ? 'page' : undefined}
                className={targetPage === key ? 'target' : ''}
              >
                {page.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  useEffect(() => {
    updateBackgroundForPage(currentPage);
  }, [currentPage]);

  return (
    <div className="App" style={backgroundStyle}>
      <BackgroundCanvas />
      
      {renderMainNavigation()}
      
      <div className="spatial-view">
        <div 
          ref={spatialContainerRef}
          className={`spatial-container ${currentPage} ${isTransitioning ? 'transitioning' : ''} ${targetPage ? `to-${targetPage}` : ''}`}
        >
          {/* Toate paginile sunt dispuse într-un grid cu poziționare exactă */}
          <div className={`page-wrapper home ${currentPage === 'home' ? 'active' : ''}`}>
            <div className="page-container">
              <HomePage navigateTo={navigateTo} />
            </div>
          </div>
          
          <div className={`page-wrapper services ${currentPage === 'services' ? 'active' : ''}`}>
            <div className="page-container">
              <ServicesPage navigateTo={navigateTo} />
            </div>
          </div>
          
          <div className={`page-wrapper portfolio ${currentPage === 'portfolio' ? 'active' : ''}`}>
            <div className="page-container">
              <PortfolioPage navigateTo={navigateTo} />
            </div>
          </div>
          
          <div className={`page-wrapper contact ${currentPage === 'contact' ? 'active' : ''}`}>
            <div className="page-container">
              <ContactPage navigateTo={navigateTo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
