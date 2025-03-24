import React from 'react';

const ContactPage = ({ navigateTo }) => {
  const handleButtonClick = (e, page) => {
    e.stopPropagation(); // Prevent event from bubbling to the page wrapper
    navigateTo(page);
  };

  const handleFormSubmit = (e) => {
    e.stopPropagation(); // Prevent event from bubbling to the page wrapper
    e.preventDefault();
    // Form submission logic would go here
    alert('Message sent! (This is a demo)');
  };

  return (
    <div className="page contact-page">
      <h1>Contact</h1>
      <p>Ai un proiect în minte? Trimite-mi un mesaj și hai să discutăm despre cum te pot ajuta.</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <div className="contact-label">Email:</div>
              <a href="mailto:contact@tudorcitean.ro">contact@tudorcitean.ro</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div>
              <div className="contact-label">Telefon:</div>
              <a href="tel:+40123456789">+40 123 456 789</a>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">🌐</div>
            <div>
              <div className="contact-label">Social:</div>
              <div>
                <a href="https://www.linkedin.com/in/tudorcitean" target="_blank" rel="noopener noreferrer">LinkedIn</a> / 
                <a href="https://github.com/tudorcitean" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nume</label>
              <input type="text" id="name" placeholder="Numele tău" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Adresa ta de email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mesaj</label>
              <textarea id="message" rows="5" placeholder="Cum te pot ajuta?" required></textarea>
            </div>
            
            <button type="submit" className="primary-button">Trimite Mesaj</button>
          </form>
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

export default ContactPage; 