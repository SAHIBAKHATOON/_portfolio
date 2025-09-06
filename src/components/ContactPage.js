import React from 'react';

function ContactPage() {
  const handleContactClick = (platform) => {
    const links = {
      github: 'https://github.com/SAHIBAKHATOON',
      linkedin: 'https://www.linkedin.com/in/ansari-sahiba-094691260/',
      email: 'mailto:sahibakhatoon2023@gmail.com',
      twitter: 'https://twitter.com/sahiba_ansari',
      phone: 'tel:+918470839414'
    };
    
    if (links[platform]) {
      window.open(links[platform], '_blank');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Let's Connect</h1>
          <p>Big thanks for checking my portfolio!</p>
        </div>
        
        <div className="contact-content">
          <p>
            I would love to connect with you for any projects or opportunities. 
            Feel free to reach out to me through any of the following platforms:
          </p>
          
          <div className="contact-icons">
            <div 
              className="contact-icon github" 
              onClick={() => handleContactClick('github')}
            >
              <i className="fab fa-github"></i>
            </div>
            
            <div 
              className="contact-icon linkedin" 
              onClick={() => handleContactClick('linkedin')}
            >
              <i className="fab fa-linkedin"></i>
            </div>
            
            <div 
              className="contact-icon email" 
              onClick={() => handleContactClick('email')}
            >
              <i className="fas fa-envelope"></i>
            </div>
            
            <div 
              className="contact-icon twitter" 
              onClick={() => handleContactClick('twitter')}
            >
              <i className="fab fa-twitter"></i>
            </div>
            
            <div 
              className="contact-icon phone" 
              onClick={() => handleContactClick('phone')}
            >
              <i className="fas fa-phone"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
