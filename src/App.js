import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import BackgroundCanvas from './components/BackgroundCanvas';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [backgroundStyle, setBackgroundStyle] = useState({});

  // Navigation map with spatial relations
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
      right: 'home'
    },
    portfolio: {
      name: 'Portofoliu',
      component: PortfolioPage,
      left: 'home'
    },
    contact: {
      name: 'Contact',
      component: ContactPage,
      up: 'home'
    }
  };

  const navigateTo = (page) => {
    if (navigationMap[page]) {
      setCurrentPage(page);
      updateBackgroundForPage(page);
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
    });
  };

  // Main navigation menu
  const renderMainNavigation = () => {
    return (
      <nav className="side-navigation">
        <ul>
          {Object.entries(navigationMap).map(([key, page]) => (
            <li key={key} className={currentPage === key ? 'active' : ''}>
              <button onClick={() => navigateTo(key)}>{page.name}</button>
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
        <div className={`spatial-container ${currentPage}`}>
          <div className="page-wrapper home">
            <div className="page-container">
              <HomePage navigateTo={navigateTo} />
            </div>
          </div>
          
          <div className="page-wrapper services">
            <div className="page-container">
              <ServicesPage navigateTo={navigateTo} />
            </div>
          </div>
          
          <div className="page-wrapper portfolio">
            <div className="page-container">
              <PortfolioPage navigateTo={navigateTo} />
            </div>
          </div>
          
          <div className="page-wrapper contact">
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
