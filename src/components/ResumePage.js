import React, { useEffect } from 'react';

function ResumePage() {
  const resumeUrl = 'https://docs.google.com/document/d/13VOb0QdC9aR8H3qq2RbKiRtrLzGCfFcZ/edit#heading=h.1fob9te';

  useEffect(() => {
    // Automatically redirect to the Google Docs resume
    window.open(resumeUrl, '_blank');
  }, []);

  return (
    <div className="resume-page">
      <div className="resume-container">
        <div className="resume-header">
          <h1>Resume</h1>
          <p>Redirecting you to view my resume...</p>
        </div>
        
        <div className="resume-content">
          <p>
            If the page doesn't open automatically, please click the button below to view my resume:
          </p>
          
          <button 
            className="resume-btn"
            onClick={() => window.open(resumeUrl, '_blank')}
          >
            <i className="fas fa-file-alt"></i>
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
