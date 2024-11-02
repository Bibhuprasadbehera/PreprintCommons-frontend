import React from 'react';
import './DownloadPage.css';

const DownloadPage = () => {
  return (
    <div className="DownloadPage">
      <h1>Download Preprints</h1>
      <p>Access preprints in various formats for convenient reading and offline access.  Ensure you comply with any copyright restrictions.</p>
      <div>
        <h2>Download Options</h2>
        <ul>
          <li>PDF: Ideal for printing and offline reading.</li>
          <li>TXT: Suitable for text-based analysis and editing.</li>
          <li>Other formats: Check individual preprint pages for additional download options.</li>
        </ul>
      </div>
    </div>
  );
};

export default DownloadPage;
