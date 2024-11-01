import React from 'react';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="Homepage">
      <header>
        <h1>Welcome to PreprintCommons</h1>
        <p className="tagline">Your one-stop shop for preprint exploration, analysis, and discovery</p>
      </header>

      <main>
        <section className="about">
          <h2>About Preprints</h2>
          <p>Preprints are scholarly articles made publicly available before peer review. They offer faster dissemination of research, increased transparency and collaboration, and early access to information. However, they lack peer review, increasing the potential for misinformation and impacting the traditional publication process.</p>
          <p>PreprintCommons is currently under development and will eventually include a comprehensive collection of preprints, with a focus on those from India. Our project aims to provide valuable insights into trends and dynamics of preprint publications.</p>
        </section>

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
          <p>Join PreprintCommons today to stay at the forefront of cutting-edge research!</p>
          <button className="cta-button">Sign Up Now</button>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
