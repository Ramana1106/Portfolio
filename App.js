import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });  // Reset form after submission
    }
  };

  return (
    <div className="container">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Hi there! I'm Ramana kumar.M, a web developer with a love for building 
          things that make people’s lives easier and more enjoyable. I’ve always
           been fascinated by technology—how it can solve problems and bring ideas to 
          life—and that curiosity led me to the world of web development.</p>

        <p> specialize in creating interactive, user-friendly websites and web apps, using
           tools like React.js and Node.js. Whether it’s designing a clean, responsive front-end or 
           setting up a solid back-end, I love being hands-on with every part of the process. I also 
           enjoy diving into data science, using Python and other tools to analyze and automate complex tasks.</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
          <li>REST APIs</li>
          <li>Python</li>
          <li>C/C++</li>
          <li>Data Science</li>
          <li>Java</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Portfolio Website</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Loan Default Prediction</p>
        </div>
        <div className="project">
          <h3>Project 3</h3>
          <p>Hangman</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>If you'd like to get in touch, feel free to send a message!</p>

        {formSubmitted ? (
          <div className="confirmation-message">
            <h3>Thank you for your message! I'll get back to you soon.</h3>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your message"
                required
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        )}

        <div className="contact-info">
          <p>Email: ramanakumar.m2023@sece.ac.in</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer">linkedin.com/in/example</a></p>
          <p>Mobile Number: 9952673327</p>
          <p>GitHub: <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">github.com/your-github</a></p>
        </div>
      </section>

      <footer>
        <h3>&copy;Ramana Kumar.M Portfolio</h3>
      </footer>
    </div>
  );
};

export default App;
