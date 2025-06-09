import React, { useState, useEffect } from "react";
import "./resume.css";

const ResumeContent = () => (
  <>
    <header>
      <h1>Mir Akbar Ali Khan</h1>
      <h2>Junior Front-End Developer with React Expertise</h2>
      <p>📞 Phone: +91 7893521085</p>
      <p>✉️ Email: mirakber4@gmail.com</p>
      <p>📍 Location: Hyderabad, India</p>
      <p>
        🌐 Portfolio:{" "}
        <a
          href="https://mir-akbar-portfolio.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          mir-akbar-portfolio.netlify.app
        </a>
      </p>
      <p>
        💻 GitHub:{" "}
        <a
          href="https://github.com/Khan4218"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/Khan4218
        </a>
      </p>
      <p>
        🔗 LinkedIn:{" "}
        <a
          href="https://linkedin.com/in/mir-akbar-ali-khan-a6b26435a"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/mir-akbar-ali-khan-a6b26435a
        </a>
      </p>
    </header>

    <section>
      <h3>Career Summary</h3>
      <ul>
        <li>
          Self-taught Front-End Developer with strong foundations in HTML5,
          CSS3, JavaScript (ES6+) and React
        </li>
        <li>Passionate about building responsive and accessible web applications.</li>
        <li>
          Proficient in building responsive and user-friendly web applications
          using HTML, CSS, JavaScript, and React
        </li>
        <li>
          Hands-on experience with JavaScript-based projects including UI logic,
          modular code, and browser storage.
        </li>
        <li>
          Strong understanding of React concepts including hooks, state management,
          and component lifecycle
        </li>
        <li>
          Comfortable using version control (Git/GitHub) and deployment platforms
          (Netlify, GitHub Pages).
        </li>
        <li>
          Strong problem-solving mindset with a detail-oriented approach and
          commitment to writing clean, maintainable code.
        </li>
        <li>
          Built multiple real-world projects from scratch, focusing on responsive
          design, clean layouts, and functional UI using JavaScript and CSS best
          practices.
        </li>
        <li>
          Experienced with browser dev tools for debugging, performance
          optimization, and cross-browser compatibility.
        </li>
        <li>
          Familiar with core testing concepts and applied unit testing using Jasmine
          in JavaScript projects.
        </li>
        <li>
          Eager to collaborate in agile teams and continuously improve through
          self-learning and feedback.
        </li>
        <li>
          Cloud Services: Hands-on experience using AWS Console for deploying and
          managing services like S3 (static site hosting), EC2 (virtual servers),
          IAM (access management), and basic Lambda setup
        </li>
        <li>
          Gained hands-on experience with AWS services including S3, EC2, IAM, and
          Lambda through project-based learning via the AWS Console
        </li>
        <li>
          Familiar with deploying static websites on AWS S3 and configuring IAM
          roles and permissions for secure access.
        </li>
      </ul>
    </section>

    <section>
      <h3>Technical Skills</h3>

      <h4>Programming & Markup Languages</h4>
      <ul>
        <li>HTML5, CSS3, JavaScript (ES6+), JSON</li>
      </ul>

      <h4>Web Development & UI Design</h4>
      <ul>
        <li>Responsive Design (Flexbox, Grid Layout)</li>
        <li>React.js (Functional Components, Hooks, JSX)</li>
        <li>DOM Manipulation & Event Handling</li>
        <li>Modular JavaScript, Clean Code Practices</li>
        <li>UI State Management, Form Validation</li>
      </ul>

      <h4>Tools & Platforms</h4>
      <ul>
        <li>Visual Studio Code (VS Code), Git, GitHub</li>
        <li>Chrome DevTools, Netlify, GitHub Pages</li>
        <li>Jasmine (Unit Testing Basics), Postman (API testing)</li>
      </ul>

      <h4>Cloud & Deployment</h4>
      <ul>
        <li>
          AWS Console: S3 (static site hosting), EC2 (basic setup), IAM (user
          roles), Lambda (event-driven concepts)
        </li>
        <li>Hosting static web apps on AWS S3</li>
        <li>Familiar with IAM policies and permissions</li>
        <li>Basic knowledge of serverless architecture and cloud storage</li>
      </ul>

      <h4>Testing & Debugging</h4>
      <ul>
        <li>Jasmine (JavaScript unit testing)</li>
        <li>Console debugging, manual UI testing</li>
        <li>Responsive testing across devices and browsers</li>
      </ul>

      <h4>Development Concepts</h4>
      <ul>
        <li>Version Control (Git & GitHub)</li>
        <li>Agile & Project-Based Learning</li>
        <li>Cross-Browser Compatibility</li>
        <li>Accessibility Principles (a11y)</li>
      </ul>
    </section>

    <section>
      <h3>Projects</h3>

      <h4>React Projects</h4>
      <ul>
        <li>
          <strong>Chef Claude – AI Recipe Generator</strong>
          <br />
          🔗{" "}
          <a
            href="https://live-demo-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>{" "}
          | 🔗{" "}
          <a
            href="https://github.com/your-repo-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <br />
          Generates custom recipes using AI based on user-input ingredients. Built with React, Hugging Face API,
          Markdown, and CSS.
        </li>

        <li>
          <strong>React Meme Generator</strong>
          <br />
          🔗{" "}
          <a
            href="https://live-demo-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>{" "}
          | 🔗{" "}
          <a
            href="https://github.com/your-repo-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <br />
          Meme generator app fetching images and allowing custom text overlay.
          Uses React hooks (useState, useEffect) and API integration.
        </li>

        <li>
          <strong>React Travel Journal</strong>
          <br />
          🔗{" "}
          <a
            href="https://live-demo-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>{" "}
          | 🔗{" "}
          <a
            href="https://github.com/your-repo-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <br />
          Static travel journal demonstrating reusable React components and data mapping.
        </li>

        <li>
          <strong>React Static Page</strong>
          <br />
          🔗{" "}
          <a
            href="https://live-demo-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>{" "}
          | 🔗{" "}
          <a
            href="https://github.com/your-repo-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <br />
          Early React learning project focusing on JSX, React Fragments, and basic components.
        </li>
      </ul>

      <h4>HTML/CSS/JavaScript Projects</h4>
      <ul>
        <li>
          <strong>Amazon Clone – Front-End eCommerce Website</strong>
          <br />
          🔗{" "}
          <a
            href="https://live-demo-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>{" "}
          | 🔗{" "}
          <a
            href="https://github.com/your-repo-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>{" "}
          | 🎥 Walkthrough Videos (Loom)
          <br />
          Developed a fully responsive multi-page eCommerce interface using HTML,
          CSS, and JavaScript. Implemented a persistent shopping cart using
          localStorage to enhance user experience. Applied modular JavaScript and
          introduced unit testing using Jasmine.
        </li>
      </ul>

      <h4>JavaScript Mini Projects Series</h4>
      <ul>
        <li>
          🔗{" "}
          <a
            href="https://live-projects-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Projects
          </a>{" "}
          | 🔗{" "}
          <a
            href="https://github.com/your-github-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>Todo List App – Interactive task manager with real-time DOM manipulation.</li>
        <li>Rock Paper Scissors – Multiple UI versions with emojis and persistent scoring via localStorage.</li>
        <li>Cart Quantity Tracker – Live quantity adjustments and dynamic UI feedback.</li>
        <li>Subscribe Button & Shipping Calculator – Interactive forms with logic-based calculations.</li>
        <li>Practiced key concepts: Arrays, objects, loops, conditionals, modular design, and event handling.</li>
      </ul>

      <h4>YouTube Homepage Clone</h4>
      <ul>
        <li>
          🔗{" "}
          <a
            href="https://live-demo-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>{" "}
          | 🔗{" "}
          <a
            href="https://github.com/your-repo-url" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </li>
        <li>
          Recreated YouTube's layout with a responsive header, sidebar, and video grid using Flexbox and CSS Grid.
          Focused on mastering responsive UI and layout design principles.
        </li>
      </ul>
    </section>

    <section>
      <h3>Education</h3>
      <ul>
        <li>
          Bachelor of Technology (B.Tech), Mechanical Engineering
          <br />
          Sree Dattha Group of Institutions, Hyderabad — 2020–2024
          <br />
          CGPA: 60.7%
        </li>
        <li>
          Intermediate (10+2)
          <br />
          Sri Medhavi Junior College — 2018–2020
          <br />
          Percentage: 50%
        </li>
        <li>
          High School (SSC)
          <br />
          Vidya Bodhini High School — 2018
          <br />
          Percentage: 83%
        </li>
      </ul>
    </section>

    <section>
      <h3>Certifications & Learning</h3>
      <ul>
        <li>Completed JavaScript project-based learning course.</li>
        <li>Actively learning via MDN Web Docs, YouTube tutorials, and real-world coding.</li>
        <li>Documented all major projects with GitHub repositories and Loom walkthroughs.</li>
      </ul>
    </section>

    <section>
      <h3>Soft Skills</h3>
      <ul>
        <li>Problem-solving</li>
        <li>Detail-oriented</li>
        <li>Motivated learner</li>
        <li>Collaborative team player</li>
      </ul>
    </section>

    <section>
      <h3>Personal Details</h3>
      <ul>
        <li>Date of Birth: 07/08/2002</li>
        <li>Languages Known: English, Hindi, Telugu</li>
        <li>Nationality: Indian</li>
      </ul>
    </section>
  </>
);

const Resume = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  return (
    <div className={`profile-container ${darkMode ? "dark-mode" : ""}`}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* <h1>Mir Akbar Ali Khan</h1> */}
        <button onClick={toggleDarkMode} aria-label="Toggle dark mode" style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <ResumeContent />
    </div>
  );
};

export default Resume;

