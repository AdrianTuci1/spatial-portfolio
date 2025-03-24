import React from 'react';

const PortfolioPage = ({ navigateTo }) => {
  const handleButtonClick = (e, page) => {
    e.stopPropagation(); // Prevent event from bubbling to the page wrapper
    navigateTo(page);
  };

  return (
    <div className="page portfolio-page">
      <h1>Portofoliu</h1>
      <p>O selecție din proiectele mele recente care demonstrează competențele și abilitățile mele.</p>
      
      <div className="portfolio-grid">
        <div className="portfolio-card">
          <div className="portfolio-image project1"></div>
          <h3>Platformă de E-learning</h3>
          <p>Dezvoltarea unei platforme complete de cursuri online, cu sistem de plăți și management al conținutului.</p>
          <p><strong>Tehnologii:</strong> React, Node.js, MongoDB, Stripe</p>
        </div>
        
        <div className="portfolio-card">
          <div className="portfolio-image project2"></div>
          <h3>Aplicație de Management al Proiectelor</h3>
          <p>Sistem complex pentru gestionarea proiectelor, sarcinilor și echipelor, cu rapoarte în timp real.</p>
          <p><strong>Tehnologii:</strong> Vue.js, Laravel, MySQL</p>
        </div>
        
        <div className="portfolio-card">
          <div className="portfolio-image project3"></div>
          <h3>Magazin Online</h3>
          <p>Platformă e-commerce complet personalizată cu integrări multiple și optimizare pentru conversii.</p>
          <p><strong>Tehnologii:</strong> React, Node.js, PostgreSQL</p>
        </div>
        
        <div className="portfolio-card">
          <div className="portfolio-image project4"></div>
          <h3>Aplicație Mobilă pentru Fitness</h3>
          <p>Aplicație pentru monitorizarea activității fizice, antrenamente personalizate și statistici complexe.</p>
          <p><strong>Tehnologii:</strong> React Native, Firebase</p>
        </div>
      </div>
      
      <button 
        className="secondary-button back-button"
        onClick={(e) => handleButtonClick(e, 'home')}
      >
        Înapoi la Pagina Principală
      </button>
    </div>
  );
};

export default PortfolioPage; 