import React, { useState, useEffect } from "react";
import "./FAQ.css";
import LoadingSpinner from "../components/LoadingSpinner";

const FAQ = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Adjust as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="faq-container">
      {isLoading && <LoadingSpinner />}
      <h1>Frequently Asked Questions</h1>
      <p>Welcome to our FAQ page! Here you’ll find answers to the most commonly asked questions. If you don’t find what you’re looking for, feel free to reach out to us.</p>
      
      <div className="faq-section">
        <h2>What is this preprint database about?</h2>
        <p>Our database provides open access to preprints across multiple scientific disciplines. Researchers and readers can browse, search, and download the latest research findings before they’re formally published.</p>
      </div>
      
      <div className="faq-section">
        <h2>How can I submit a preprint?</h2>
        <p>At this time, submissions are managed through partner repositories. We provide access to preprints already available across various open-access platforms.</p>
      </div>
      
      <div className="faq-section">
        <h2>Is there a cost to access these preprints?</h2>
        <p>No, all preprints in our collection are freely accessible to support the open exchange of knowledge.</p>
      </div>
      
      <div className="faq-section">
        <h2>How often is the database updated?</h2>
        <p>Our database is updated regularly to include the latest preprints. Check back often to see new content in your field of interest.</p>
      </div>
      
      <div className="faq-section">
        <h2>Can I download preprints in different formats?</h2>
        <p>Yes, preprints are available in formats such as PDF and TXT. Additional formats may be available depending on the preprint.</p>
      </div>
    </div>
  );
};

export default FAQ;
