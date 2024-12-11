import React from 'react';
import './ResultsPage.css';
import Sidebar from '../components/Sidebar';

const ResultsPage = () => {
  return (
    <div className="results-page">
      <div className="content-container">
        <Sidebar />
        <div className="results-content">
          <h1>Search Results</h1>
          <div className="results-container">
            {/* Results will be displayed here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
