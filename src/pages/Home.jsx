import { useNavigate } from "react-router-dom";
import { FaReact } from "react-icons/fa"; // React icon
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/projects");
  };

  return (
    <section className="home-section">
      <div className="content-wrapper">
        <h1 className="name">Mir Akbar Ali Khan</h1>

        <h2 className="title react-title">
          <FaReact className="react-icon" />
          React Portfolio
        </h2>

        <p className="tagline">
          This portfolio was built entirely with React, showcasing modern web development best practices and dynamic project experiences.
        </p>

        <button className="cta-button" onClick={goToProjects}>
          View My Projects →
        </button>
      </div>
    </section>
  );
};

export default Home;
