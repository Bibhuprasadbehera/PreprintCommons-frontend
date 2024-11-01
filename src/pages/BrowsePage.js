import React, { useState } from 'react';
import './BrowsePage.css';

const BrowsePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Life Sciences', 'Physical Sciences', 'Social Sciences', 'Humanities', 'Computer Science', 'Mathematics'];

  // Placeholder data for preprints
  const preprints = [
    { id: 1, title: "Novel AI Approach for Climate Modeling", authors: "Smith, J., Doe, A.", category: "Computer Science", date: "2023-05-15" },
    { id: 2, title: "Quantum Entanglement in Biological Systems", authors: "Johnson, L., et al.", category: "Life Sciences", date: "2023-05-14" },
    // Add more preprint objects here
  ];

  return (
    <div className="BrowsePage">
      <h1>Browse Preprints</h1>
      <p>Explore the latest preprints across various disciplines.</p>
      
      <div className="category-filter">
        <h2>Categories</h2>
        <ul>
          {categories.map(category => (
            <li 
              key={category} 
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="preprint-list">
        <h2>Latest Preprints</h2>
        {preprints
          .filter(preprint => selectedCategory === 'All' || preprint.category === selectedCategory)
          .map(preprint => (
            <div key={preprint.id} className="preprint-item">
              <h3>{preprint.title}</h3>
              <p>Authors: {preprint.authors}</p>
              <p>Category: {preprint.category}</p>
              <p>Date: {preprint.date}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default BrowsePage;
