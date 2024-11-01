import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPreprints.css';

const AboutPreprints = () => {
  return (
    <div className="AboutPreprints">
      <h1>About Preprints</h1>

      <section className="preprint-definition">
        <h2>What are Preprints?</h2>
        <p>Preprints are scholarly articles made publicly available before undergoing peer review. They represent the cutting edge of research, offering a glimpse into ongoing studies and emerging ideas.</p>

      </section>

      <section className="advantages">
        <h2>Advantages of Preprints</h2>
        <ul>
          <li><strong>Rapid Dissemination:</strong> Share findings quickly, accelerating scientific progress.</li>
          <li><strong>Increased Visibility:</strong> Gain early attention for your work and establish priority.</li>
          <li><strong>Open Feedback:</strong> Receive comments from a wider audience, improving research quality.</li>
          <li><strong>Early Access:</strong> Stay updated with the latest developments in your field.</li>
          <li><strong>Collaboration Opportunities:</strong> Connect with potential collaborators and partners.</li>
        </ul>
      </section>

      <section className="considerations">
        <h2>Important Considerations</h2>
        <ul>
          <li><strong>Lack of Peer Review:</strong> Preprints haven't undergone formal peer review, so findings should be interpreted cautiously.</li>
          <li><strong>Potential for Misinformation:</strong> Unverified information can spread quickly, requiring critical evaluation.</li>
          <li><strong>Impact on Publication Process:</strong> Some journals have specific policies regarding preprints, which authors should be aware of.</li>
        </ul>
      </section>

      <section className="preprintcommons-info">
        <h2>PreprintCommons: Your Preprint Hub</h2>
        <p>PreprintCommons is dedicated to making preprints more accessible and valuable to researchers worldwide. Our platform offers:</p>
        <ul>
          <li>A comprehensive database of preprints from various disciplines</li>
          <li>Advanced search and filtering capabilities</li>
          <li>Tools for tracking preprint metrics and impact</li>
          <li>A focus on preprints from India and other emerging research hubs</li>
        </ul>
        <Link to="/search" className="start-exploring-button">Start Exploring Preprints</Link>
      </section>

      <section className="additional-resources">
        <h2>Additional Resources</h2>
        <ul>
          <li><a href="https://www.example.com/faq" target="_blank" rel="noopener noreferrer">FAQs about Preprints</a></li>
          <li><a href="https://www.example.com/policies" target="_blank" rel="noopener noreferrer">Preprint Policies and Guidelines</a></li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPreprints;
