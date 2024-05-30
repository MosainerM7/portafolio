import React, { useEffect } from 'react';
import './Portfolio.css';
import './assets/css/all.min.css'
import 'aos/dist/aos.css';
import AOS from 'aos';

//target="_blank"
//Propósito: Abre el enlace en una nueva pestaña o ventana del navegador.
//rel="noopener noreferrer"
//Propósito: Aumenta la seguridad y privacidad cuando se utilizan enlaces con target="_blank".
// Importar las imágenes
import aboutImage from './assets/imagen21.jpg';
import skillsImage from './assets/imagen3.avif';
import projectsImage from './assets/imagen4.jpg';
import contactImage from './assets/imagen5.jpg';
import profileImage from './assets/Imagen de prueba.jpg';
import backgroundVideo from './assets/video.mp4';

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="portfolio">
      <header className="header">
        <nav className="navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hero">
          <video autoPlay loop muted className="video-background">
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1 data-aos="fade-up" data-aos-delay="200">Mosainer Martín</h1>
          <p data-aos="fade-up" data-aos-delay="400">Programador Front-End</p>
        </div>
      </header>
      <main>
        <section id="about" className="section" style={{ backgroundImage: `url(${aboutImage})` }}>
          <div className="section-content" data-aos="fade-up">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <h2>Acerca de mi</h2>
            <p>Estudiante de Ingeniería en Sistemas de Información, soy una persona bastante apasionada por aprender y adquirir nuevos conocimientos para poder mejorar.
               Este portafolio esta hecho para probar los conocimientos que adquirí.
            </p>
          </div>
        </section>
        <section id="skills" className="section" style={{ backgroundImage: `url(${skillsImage})` }}>
          <div className="section-content" data-aos="fade-up">
            <h2>Conocimientos</h2>
            <ul>
              <li>Word, Excel, PowerPoint</li>
              <li>JavaScript - TypeScript</li>
              <li>C</li>
              <li>Java</li>
              <li>React.js</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
        </section>
        <section id="projects" className="section" style={{ backgroundImage: `url(${projectsImage})` }}>
          <div className="section-content" data-aos="fade-up">
            <h2>Proyectos</h2>
            <div className="project">
              <h3>Proyecto 1: Lista de Tareas react</h3>
              <a href="https://github.com/MosainerM7/my-first-task-react.github.io" target="_blank" rel="noopener noreferrer" className="project-link">
                Ver en GitHub
              </a>
            </div>
            <div className="project">
              <h3>Proyecto 2: Argentina Programa Curriculum</h3>
              <a href="https://github.com/MosainerM7/mosainerm7.github.io" target="_blank" rel="noopener noreferrer" className="project-link">
                Ver en GitHub
              </a>
            </div>
          </div>
        </section>
        <section id="contact" className="section" style={{ backgroundImage: `url(${contactImage})` }}>
          <div className="section-content" data-aos="fade-up">
            <h2>Contacto</h2>
            <p>Email: mosainermartin7@gmail.com</p>
            <div className="social-icons">
              <a href="https://github.com/MosainerM7" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/martin.mosainer07/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/martin-mosainer-0a02b6289/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 - Portafolio de prueba</p>
      </footer>
    </div>
  );
}

export default Portfolio;
