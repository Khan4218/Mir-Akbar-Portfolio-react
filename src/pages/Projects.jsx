import React, { useEffect, useState } from 'react';
import './projects.css';

const allProjects = [
  {
    name: "Chef Claude – AI Recipe Generator",
    description: "Generates custom recipes using AI based on ingredients entered by the user.",
    tech: "React, Hugging Face API, Markdown, CSS",
    live: "https://akbar-chef-claude-project-3.netlify.app/",
    github: "https://github.com/Khan4218/Chef-Claude-project-3",
    isReact: true
  },
  {
    name: "React Meme Generator",
    description: "A fun meme generator app that fetches meme images and lets users add custom text.",
    tech: "React, useState, useEffect, API, CSS",
    live: "https://react-meme-generator-akbar.netlify.app/",
    github: "https://github.com/Khan4218/React-Meme-Generator-project-4",
    isReact: true
  },
  {
    name: "React Travel Journal",
    description: "A simple React-based static travel journal to demonstrate reusable components and data mapping.",
    tech: "React, Props, JSX, CSS",
    live: "https://akbar-react-project-2.netlify.app/",
    github: "https://github.com/Khan4218/React-project-2",
    isReact: true
  },
  {
    name: "React Static Page",
    description: "An early learning project focused on JSX, React Fragments, and component basics.",
    tech: "React, Vite, JSX, CSS",
    live: "https://akbar-simple-react-project-1.netlify.app/",
    github: "https://github.com/Khan4218/React-project1",
    isReact: true
  },
  {
    name: "Amazon Clone",
    description: "Fully functional eCommerce front-end clone using HTML, CSS, JavaScript. Includes cart, checkout, order tracking.",
    tech: "HTML, CSS, JavaScript",
    live: "https://khan4218.github.io/my-amazon-project/",
    github: "https://github.com/Khan4218/my-amazon-project",
    walkthrough: "https://loom.com/share/folder/bb721a45b61f4e4394cd501cb2f31387",
    isReact: false
  },
  {
    name: "JavaScript Learning Series",
    description: "A complete journey learning JavaScript, from basics to DOM manipulation, and multiple mini-projects.",
    tech: "JavaScript, HTML, CSS",
    live: "https://khan4218.github.io/javascript-learning/",
    github: "https://github.com/Khan4218/javascript-learning",
    isReact: false
  },
  {
    name: "YouTube Clone",
    description: "My first project, built using HTML and CSS. Mimics the layout of YouTube homepage.",
    tech: "HTML, CSS",
    live: "https://khan4218.github.io/Akbar-Youtube-Homepage-Clone/",
    github: "https://github.com/Khan4218/Akbar-Youtube-Homepage-Clone.git",
    isReact: false
  },

];

const Projects = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToReactSection = () => {
    const reactSection = document.querySelector('.react-section');
    if (reactSection) {
      const offset = -50;
      const topPos = reactSection.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <main className="container-react-section">
      {/* {showScroll && (
        <button
          id="scroll-arrow"
          aria-label="Scroll to Projects"
          className="scroll-button"
          title="Scroll to Projects"
          onClick={scrollToReactSection}
        >
          ⬇️ Scroll to Projects
        </button>
      )} */}

      <h2 className="section-title">My Projects</h2>

      <div className="project-grid">
        {allProjects.map((proj, index) => (
          <div key={index} className={`card ${proj.isReact ? 'react-project' : ''}`}>
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <p><strong>Tech Stack:</strong> {proj.tech}</p>
            <div className="project-links">
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noopener noreferrer">
                  🔗 Live Demo
                </a>
              )}
              {proj.github && (
                <>
                  {" | "}
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">
                    💻 GitHub
                  </a>
                </>
              )}
              {proj.walkthrough && (
                <>
                  {" | "}
                  <a href={proj.walkthrough} target="_blank" rel="noopener noreferrer">
                    🎥 Loom Walkthrough
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
