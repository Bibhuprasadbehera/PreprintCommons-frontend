import React from 'react';
import './BrowsePage.css';
import GoToTop from '../components/GoToTop';

const BrowsePage = () => {
  return (
    <div className="BrowsePage">
      <h1>Browse Preprints</h1>
      <p>Explore a curated collection of preprints categorized by subject area. Discover new research and expand your knowledge with the latest findings across disciplines.</p>
      
      <div>
        <h2>Preprint Categories</h2>
        <ul>
          <li><strong>Computer Science</strong>: Discover innovations in AI, machine learning, algorithms, and emerging computing fields.</li>
          <li><strong>Biology</strong>: Stay updated with new insights in genetics, evolutionary biology, ecology, and more.</li>
          <li><strong>Physics</strong>: Delve into breakthroughs in quantum mechanics, astrophysics, condensed matter, and theoretical physics.</li>
          <li><strong>Medicine</strong>: Access studies in clinical research, medical technology, epidemiology, and health sciences.</li>
          <li><strong>Engineering</strong>: Explore advancements in electrical, civil, mechanical, and biomedical engineering, including sustainable technology.</li>
        </ul>

        <h2>Popular Topics</h2>
        <p>In addition to categorized subjects, popular topics often covered in preprints include:</p>
        <ul>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Climate Change and Environmental Studies</li>
          <li>Healthcare Innovations and Public Health</li>
          <li>Nanotechnology and Material Science</li>
          <li>Genomics and Personalized Medicine</li>
        </ul>

        <h2>Why Browse Preprints?</h2>
        <p>Preprints provide early access to scientific discoveries, allowing researchers to build on existing knowledge faster than waiting for traditional journal publication. Browse today to stay ahead in your field!</p>
      </div>
      <GoToTop />
    </div>
  );
};

export default BrowsePage;
