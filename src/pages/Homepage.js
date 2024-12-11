import React, { useState, useEffect } from "react";
import "./Homepage.css";
import logo1 from "../../src/images/logo1.png";
import GoToTop from "../components/GoToTop";
import LoadingSpinner from "../components/LoadingSpinner";
import Worldmap from "../components/Charts/Worldmap";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Adjust loading time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Homepage">
      {isLoading && <LoadingSpinner />} {/* Add LoadingSpinner */}
      <header className="header">
        <div className="logo-container">
          <img src={logo1} alt="Logo1" className="logo" />
        </div>
        <div className="intro-text">
          <h2>About Preprint Commons</h2>
          <p>
            Preprints are scholarly articles made publicly available before peer review. They offer faster dissemination of research, increased transparency, and collaboration, providing early access to scientific knowledge.  This allows for rapid sharing of findings and facilitates quicker feedback from the research community.  However, preprints lack peer review, so they come with potential risks of misinformation, impacting the traditional publication process.  It's crucial to critically evaluate preprints and consider their limitations before relying on them for definitive conclusions.
          </p>
          <p>
            <strong>PreprintCommons</strong> aims to develop a comprehensive collection of preprints with an emphasis on those from India, enabling insights into trends and dynamics of preprint publications.  Our goal is to provide a valuable resource for researchers, educators, and the public, promoting open access and facilitating the advancement of knowledge.
          </p>
        </div>
      </header>

      <main>
        <section className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Search and browse preprints across multiple disciplines</li>
            <li>Download preprints with ease</li>
            <li>Track preprint metrics and impact</li>
            <li>Explore trends in preprint publications</li>
            <li>Connect with researchers and institutions</li>
          </ul>
        </section>

        <section className="preprints-explained">
          <h2>Understanding Preprints</h2>
          <p>
            <strong>Benefits:</strong> Faster dissemination of research, increased transparency, early feedback, and potential for wider collaboration.
          </p>
          <p>
            <strong>Risks:</strong> Lack of peer review, potential for errors or misinformation, and impact on the traditional publication process.  Always critically evaluate the information presented in a preprint.
          </p>
        </section>

        <section className="trending">
          <h2>Trending Preprints</h2>
          <ul>
            <li>A Novel Approach to Quantum Computing</li>
            <li>The Impact of Climate Change on Coastal Cities</li>
            <li>Advances in Artificial Intelligence for Healthcare</li>
            <li>Sustainable Energy Solutions for Developing Countries</li>
            <li>Neuroplasticity and Its Role in Learning</li>
          </ul>
        </section>

        <section className="institutions">
          <h2>Top Contributing Institutions</h2>
          <ul>
            <li>Massachusetts Institute of Technology (MIT)</li>
            <li>Stanford University</li>
            <li>University of California, Berkeley</li>
            <li>Indian Institute of Science (IISc)</li>
            <li>Tata Institute of Fundamental Research (TIFR)</li>
          </ul>
        </section>

        <section className="cta">
          <h2>Get Started</h2>
          <p>
            Join PreprintCommons today to stay at the forefront of cutting-edge research!
          </p>
          <button className="cta-button">Sign Up Now</button>
        </section>
        
        <section className="worldmap">
          <h2>Global Preprint Distribution</h2>
          <Worldmap />
        </section>

      </main>
      <GoToTop />
    </div>
  );
};

export default Homepage;
