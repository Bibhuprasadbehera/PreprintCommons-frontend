import React from 'react';
import './BrowsePage.css';

const BrowsePage = () => {
  return (
    <div className="BrowsePage">
      <h1>Browse Preprints</h1>
      <p>Explore a curated collection of preprints categorized by subject area.  Discover new research and expand your knowledge.</p>
      <div>
        <h2>Preprint Categories</h2>
        <ul>
          <li>Computer Science: Explore cutting-edge advancements in algorithms, artificial intelligence, and more.</li>
          <li>Biology: Discover breakthroughs in genetics, biotechnology, and the life sciences.</li>
          <li>Physics: Delve into the latest research on quantum mechanics, astrophysics, and other areas.</li>
          <li>Medicine: Find studies on new treatments, diagnostics, and advancements in healthcare.</li>
          <li>Engineering: Explore innovations in materials science, robotics, and sustainable technologies.</li>
        </ul>
      </div>
    </div>
  );
};

export default BrowsePage;
