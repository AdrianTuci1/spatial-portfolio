import React from 'react';

const HomePage = ({ navigateTo }) => {
  const handleButtonClick = (e, page) => {
    e.stopPropagation(); // Prevent event from bubbling to the page wrapper
    navigateTo(page);
  };

  return (
    <div className="page home-page">
      <div className="avatar-container">
        <div className="avatar"></div>
      </div>
      
      <h1>Tudor Cîțean</h1>
      <p className="intro-text">
        Full Stack Developer specializat în tehnologii web moderne. 
        Creez aplicații frumoase, responsive și ușor de utilizat 
        care rezolvă probleme reale pentru clienți.
      </p>
      
      <div className="home-buttons">
        <button 
          className="primary-button"
          onClick={(e) => handleButtonClick(e, 'portfolio')}
        >
          Vezi Proiectele Mele
        </button>
        <button 
          className="secondary-button"
          onClick={(e) => handleButtonClick(e, 'contact')}
        >
          Contactează-mă
        </button>
      </div>
      
      <div className="tech-stack">
        <h2>Tehnologii</h2>
        <div className="tech-icons">
          <span className="tech-icon">React</span>
          <span className="tech-icon">Vue.js</span>
          <span className="tech-icon">Node.js</span>
          <span className="tech-icon">JavaScript</span>
          <span className="tech-icon">TypeScript</span>
          <span className="tech-icon">PHP</span>
          <span className="tech-icon">Laravel</span>
          <span className="tech-icon">MySQL</span>
          <span className="tech-icon">MongoDB</span>
        </div>
      </div>
      
      <p className="navigation-hint">
        Folosește meniul din dreapta sus pentru a naviga între pagini
      </p>
    </div>
  );
};

export default HomePage; 