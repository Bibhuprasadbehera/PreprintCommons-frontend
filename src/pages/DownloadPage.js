import React from 'react';
import './DownloadPage.css';
import GoToTop from '../components/GoToTop';

const DownloadPage = () => {
  return (
    <div className="DownloadPage">
      <h1>Download Preprints</h1>
      <p>Access preprints in various formats for convenient reading and offline access. All downloads are free, but please ensure to respect copyright and usage policies associated with each work.</p>
      
      <div>
        <h2>Download Options</h2>
        <ul>
          <li><strong>PDF</strong>: Ideal for reading on most devices and printing. PDFs retain the layout and formatting of the original document.</li>
          <li><strong>TXT</strong>: Suitable for text-based analysis and editing, ideal for researchers working with textual data or performing text mining.</li>
          <li><strong>EPUB</strong>: Optimized for e-readers and mobile devices. Great for those who prefer to read on the go.</li>
          <li><strong>Other formats</strong>: Check individual preprint pages for additional formats like XML, HTML, and Markdown.</li>
        </ul>

        <h2>Downloading Tips</h2>
        <p>To maximize usability, consider your device's compatibility with each format. PDFs are ideal for most users, while plain text formats are excellent for data extraction and annotation work.</p>

        <h2>Terms of Use</h2>
        <p>Please remember that preprints are not peer-reviewed and are subject to change. Always check for updates before citing or distributing the preprint content.</p>
      </div>
      <GoToTop />
    </div>
  );
};

export default DownloadPage;
