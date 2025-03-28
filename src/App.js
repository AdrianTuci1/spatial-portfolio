import React from 'react';
import './App.css';

function App() {

  const projects = ["Simplu", "Marmur Art", "Hotel Rivoli", "Altul"]
  const creativeProcess = ["IDEATION", "DESIGN", "DEVELOPMENT"]

  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  return (
    <div className="App">
      <main>
        <section id="home" className="hero-section">
          <h1 className="hero-title">TUCHAN</h1>
          <p className="hero-subtitle">Boost your<br/> digital space <br/> through immersive <br/> stories. </p>
          <p className="mission">
            love all you see, it’s a process
            and you got to go through it
            embrace everything you encounter
            with joy.
          </p>
          <div className="image-placeholder">
            <div className="image-container">
            <img src="/images/cristal.png" alt="cristal" />
            </div>
          </div>
        </section>
        <section id="about" className="about-section">
          <p className="section-description">
            I’m a Web 
            Designer, <br/>
            based in <br/>
            Bucharest <br/>
            that tells stories <br/>
            through my craft. <br/>
            Looking for
            extraordinary <br/>
            in ordinary. I bring
            joy to people <br/>
            all over
            the world.
          </p>
          <div className="hero-placeholder">
            <div className="hero-container">
              <img src="/images/imagdde.png" alt="eu" />
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="title-container">
          <h2 className="section-title">SELECTED WORKS</h2>
          <h2 className="section-title">'23 - '25</h2>
          </div>
          <div className="divider"></div>
          <div className="projects-container">
          {projects.map((title, index) => (
            <div className="project-card" key={index} style={{backgroundColor: generateRandomColor()}}>
                <h2 className="project-title">
                  {title}
                </h2>
            </div>
          ))}
          </div>
        </section>

        <section id="creative" className="creative-section">
          <div className="box">
            <h2>THIS IS HOW IT<br/> LOOKS LIKE. THAT'S</h2>
          </div>
          <div className="box">
            <h2>HOW IT FEELS <br/> LIKE</h2>
            <div className="creative-wrapper">
              <img src="/images/wonder.png" alt="creative" />
            </div>
          </div>      
        </section>

        <section id="creative" className="creative-process">
          <h2>CREATIVE PROCESS</h2>
          <div className="process-wrapper">
            {creativeProcess.map((title, index) => (
            <div className="process-card" key={index} style={{backgroundColor: generateRandomColor()}}>
              <h3>{title}</h3>
            </div>
            ))}
          </div>
          <p>
            It often begins with inspiration, followed by exploration, where thoughts are brainstormed and refined. 
            Through experimentation and iteration, concepts evolve, taking shape through trial, error, and discovery. 
            Eventually, a final form emerges — a unique expression shaped by imagination, persistence, and personal 
            vision.
          </p>
        </section>

        <section id="contact" className="contact-section">
            <div className="icon-box">
            </div>

            <div className="headliner">
              <h2>THE JOURNEY BEGINS...</h2>
            </div>

            <div className="contact-wrapper">
              <div className="contact-text">
                <h2>
                  I’m friendly, <br/>
                  but my work <br/>
                  hits hard. <br/>
                  Curious? <br/>
                  Let’s cause <br/>
                  some <br/>
                  chaos together.
                </h2>
              </div>

              <div className="contact-placeholders">
                <div className="email-placeholder">
                  <h2>EMAIL</h2>
                  <p>tucean@gmail.com</p>
                </div>
                <div className="location-placeholder">
                  <h2>LOCATION</h2>
                  <p>Bucharest, Romania</p>
                </div>
                
              </div>
            </div>
        </section>

        <footer id="footer" className="footer-section">
        <h1 className="hero-title">TUCHAN</h1>
        <div className="socials">
          <a href="https://www.instagram.com/tucean_design/">
            <p>INSTAGRAM</p>
          </a>
          <a href="https://www.linkedin.com/in/tucean/">  
            <p>LINKEDIN</p>
          </a>        
        </div>
        </footer>
        <div className="copyright">
          <p> © 2025 TUCHAN <br/>
          Reproduction without vibe is strictly prohibited.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
