import React from 'react';
import './Sidebar.css';

const Sidebar = ({ children }) => {
  return (
    <aside className="sidebar">
      <h3>Filters</h3>
      <div className="filter-option">
        <label htmlFor="year">Year:</label>
        <select id="year">
          <option value="">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          {/* Add more years as needed */}
        </select>
      </div>
      <div className="filter-option">
        <label htmlFor="subject">Subject:</label>
        <select id="subject">
          <option value="">All</option>
          <option value="Physics">Physics</option>
          <option value="Mathematics">Mathematics</option>
          {/* Add more subjects as needed */}
        </select>
      </div>
      <div className="filter-option">
        <label htmlFor="country">Country:</label>
        <select id="country">
          <option value="">All</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      {/* Add more filter options as needed */}
    </aside>
  );
};

export default Sidebar;
