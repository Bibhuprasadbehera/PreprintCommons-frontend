import React, { useState } from 'react';
import './DownloadPage.css';

const DownloadPage = () => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const handleDownload = (format) => {
    // Simulate a download
    const interval = setInterval(() => {
      setProgress(oldProgress => {
        const newProgress = oldProgress + 10;
        if (newProgress === 100) {
          clearInterval(interval);
          // Download complete, reset progress and handle the download
          setProgress(0);
          setError(null);
          // Add code here to handle the download
        }
        return newProgress;
      });
    }, 500);

    // Simulate an error
    setTimeout(() => setError('An error occurred during the download'), 2000);
  };

  return (
    <div className="DownloadPage">
      <h1>Download Preprints</h1>
      <p>Download preprints in various formats.</p>
      <div>
        <h2>Download Options</h2>
        <ul>
          <li>
            PDF - A portable document format suitable for printing and viewing on a variety of devices.
            <button onClick={() => handleDownload('pdf')}>Download</button>
          </li>
          <li>
            TXT - A plain text format suitable for reading with a text editor.
            <button onClick={() => handleDownload('txt')}>Download</button>
          </li>
          {/* Add more formats as needed */}
        </ul>
        {progress > 0 && <progress value={progress} max="100" />}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default DownloadPage;
