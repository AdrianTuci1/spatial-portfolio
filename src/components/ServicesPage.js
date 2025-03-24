import React from 'react';

const ServicesPage = ({ navigateTo }) => {
  const handleButtonClick = (e, page) => {
    e.stopPropagation(); // Prevent event from bubbling to the page wrapper
    navigateTo(page);
  };

  return (
    <div className="page services-page">
      <h1>Serviciile Mele</h1>
      <p>Ofer soluții personalizate pentru proiecte de toate dimensiunile, 
         cu accent pe calitate și experiența utilizatorului.</p>
      
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Dezvoltare Web Frontend</h3>
          <p>Interfețe responsive și intuitive folosind React, Vue.js și alte tehnologii moderne.</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">⚙️</div>
          <h3>Dezvoltare Web Backend</h3>
          <p>Dezvoltare de API-uri și servicii robuste folosind Node.js, PHP și Laravel.</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">📱</div>
          <h3>Aplicații Mobile</h3>
          <p>Aplicații mobile cross-platform folosind React Native și Flutter.</p>
        </div>
        
        <div className="service-card">
          <div className="service-icon">🔒</div>
          <h3>Securitate Web</h3>
          <p>Implementarea celor mai bune practici de securitate pentru a proteja datele utilizatorilor.</p>
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

export default ServicesPage; 