import "./about.css";
import "../styles/styles.css";
import React, { useState, useEffect } from "react";
import "./about.css";

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("aboutDarkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("aboutDarkMode", !prev);
      return !prev;
    });
  };

  return (
    <section className={`about-section ${darkMode ? "dark-mode" : ""}`}>
      <div className="about-wrapper">
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="dark-mode-toggle"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          Hello! I’m <strong>Mir Akbar Ali Khan</strong>, a dedicated Front-End Developer with a strong foundation in HTML, CSS, JavaScript, and React.js.
          I specialize in building responsive, accessible, and high-performance web applications that provide seamless user experiences across all devices.
        </p>
        <p className="about-text">
          My passion lies in transforming design concepts into clean, efficient code, ensuring pixel-perfect layouts and smooth interactivity.
          I enjoy working with modern web technologies, constantly experimenting with new libraries and frameworks to stay ahead in this fast-evolving field.
        </p>
        <p className="about-text">
          Beyond coding, I’m an avid learner who values clean code principles, modular design, and best practices in front-end development.
          I’m enthusiastic about collaborating in agile teams and believe in continuous improvement through feedback and hands-on experience.
        </p>
        <p className="about-text">
          When I’m not building web applications, I love exploring open-source projects, writing technical blogs to share knowledge,
          and engaging with developer communities to contribute and grow professionally.
        </p>
        <p className="about-text">
          My goal is to create intuitive digital experiences that solve real-world problems and leave a positive impact on users worldwide.
        </p>

      </div>
    </section>
  );
};

export default About;
