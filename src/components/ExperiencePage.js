import React, { useState } from 'react';

function ExperiencePage() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleContactClick = (platform) => {
    const links = {
      github: 'https://github.com/SAHIBAKHATOON',
      linkedin: 'https://www.linkedin.com/in/ansari-sahiba-094691260/',
      email: 'mailto:sahiba.ansari@example.com',
      twitter: 'https://twitter.com/sahiba_ansari',
      phone: 'tel:+1234567890'
    };

    if (links[platform]) {
      window.open(links[platform], '_blank');
    }
  };

  return (
    <div className="experience-page">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${Math.random() * 5}s`,
              '--duration': `${3 + Math.random() * 4}s`,
              '--size': `${2 + Math.random() * 8}px`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`
            }}></div>
          ))}
        </div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Floating Navigation */}
      <nav className="floating-nav">
        <div className="nav-dots">
          {['hero', 'experience', 'skills'].map((section) => (
            <button
              key={section}
              className={`nav-dot ${activeSection === section ? 'active' : ''}`}
              onClick={() => setActiveSection(section)}
            >
              <span className="dot-label">{section}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="experience-container">
        {/* Hero Section */}
        <section id="hero" className={`hero-section ${activeSection === 'hero' ? 'active' : ''}`}>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-line">
                  <span className="gradient-text">Professional</span>
                </span>
                <span className="title-line">
                  <span className="gradient-text">Journey</span>
                </span>
              </h1>
              <p className="hero-subtitle">
                Crafting digital experiences with <span className="highlight">passion</span> and <span className="highlight">precision</span>
              </p>
            </div>

            <div className="hero-visual">
              <div className="floating-cards">
                <div className="floating-card card-1">
                  <div className="card-icon">🚀</div>
                  <div className="card-content">
                    <h3>1+ Years</h3>
                    <p>Experience</p>
                  </div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">💼</div>
                  <div className="card-content">
                    <h3>4</h3>
                    <p>Internships</p>
                  </div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">🎯</div>
                  <div className="card-content">
                    <h3>10+</h3>
                    <p>Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
            <span>Scroll to explore</span>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section id="experience" className={`experience-timeline-section ${activeSection === 'experience' ? 'active' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-decoration">✦</span>
              Work Experience
              <span className="title-decoration">✦</span>
            </h2>
            <div className="section-subtitle">My professional growth story</div>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>

            {/* Current Role */}
            <div className="timeline-item current">
              <div className="timeline-marker">
                <div className="marker-ring"></div>
                <div className="marker-dot active"></div>
                <div className="marker-pulse"></div>
              </div>
              <div className="timeline-content">
                <div className="content-header">
                  <div className="role-info">
                    <h3 className="role-title">Software Developer</h3>
                    <div className="company-info">
                      <span className="company-name">Quality Outside Private Limited (Chennai)</span>
                      <span className="duration">Jan 2025 - Jan 2025</span>
                    </div>
                  </div>
                  <div className="role-badge current-badge">
                    <span className="badge-text">Full time</span>
                    <div className="badge-glow"></div>
                  </div>
                </div>
                <div className="content-body">
                  <p className="role-description">
                    Driving frontend development initiatives, building responsive and scalable user interfaces, and collaborating with cross-functional teams to deliver seamless web experiences."
                  </p>
                  <div className="achievements">
                    <h4>Key Achievements</h4>
                    <ul>
                      <li>Developed and maintained 5+ enterprise web applications</li>
                      <li>Developed a secure and responsive login page, enhancing user authentication flow</li>
                      <li>Implemented new features and improved existing functionality to boost user experience</li>
                      <li>Collaborated with the team to ensure smooth integration of frontend components</li>
                    </ul>
                  </div>
                  <div className="tech-stack">
                    <div className="tech-item">HTML</div>
                    <div className="tech-item">CSS</div>
                    <div className="tech-item">Javascript</div>
                    <div className="tech-item">Git</div>
                     
                  </div>
                </div>
              </div>
            </div>

            {/* Alphabuy Internship */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-ring"></div>
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-content">
                <div className="content-header">
                  <div className="role-info">
                    <h3 className="role-title">Frontend Developer</h3>
                    <div className="company-info">
                      <span className="company-name">Alphabuy Private Limited (Remote)</span>
                      <span className="duration">May 2024 - Nov 2024</span>
                    </div>
                  </div>
                  <div className="role-badge intern-badge">
                    <span className="badge-text">Internship</span>
                  </div>
                </div>
                <div className="content-body">
                  <p className="role-description">
                    Worked as a Frontend Developer to create an E-commerce Product Dashboard: Built an admin dashboard with dynamic product listing, pagination, and category filters using Next.js and Tailwind CSS with REST API integration.
                  </p>
                  <div className="achievements">
                    <h4>Key Achievements</h4>
                    <ul>
                      <li>Developed a comprehensive admin dashboard for e-commerce product management with dynamic data visualization</li>
                      <li>Implemented advanced pagination system to handle large product datasets efficiently</li>
                      <li>Created intuitive category filtering system with real-time search functionality</li>
                      <li>Built responsive product listing interface with sorting and filtering capabilities</li>
                      <li>Integrated REST API endpoints for seamless data fetching and manipulation</li>
                      <li>Collaborated with backend team to ensure optimal API performance and data structure</li>
                      <li>Implemented modern UI/UX patterns using Tailwind CSS for consistent design system</li>
                      <li>Utilized Next.js features for server-side rendering and improved performance</li>
                      <li>Maintained code quality and version control using Git for collaborative development</li>
                      <li>Optimized dashboard performance for handling 1000+ products with smooth user experience</li>
                    </ul>
                  </div>
                  <div className="tech-stack">
                    <div className="tech-item">Next.js</div>
                    <div className="tech-item">Tailwind CSS</div>
                    <div className="tech-item">REST API</div>
                    <div className="tech-item">JavaScript</div>
                    <div className="tech-item">Git</div>
                    <div className="tech-item">React</div>
                  </div>
                </div>
              </div>
            </div>

                         {/* Internships */}
             <div className="timeline-item">
               <div className="timeline-marker">
                 <div className="marker-ring"></div>
                 <div className="marker-dot"></div>
               </div>
               <div className="timeline-content">
                 <div className="content-header">
                   <div className="role-info">
                     <h3 className="role-title">Frontend Developer Intern</h3>
                     <div className="company-info">
                       <span className="company-name">Salesqueen Software Sloutions</span>
                       <span className="duration">April 2024 - Oct 2024</span>
                     </div>
                   </div>
                   <div className="role-badge intern-badge">
                     <span className="badge-text">Internship</span>
                   </div>
                 </div>
                 <div className="content-body">
                   <p className="role-description">
                     Led a team of 10 frontend developers, managing the overall workflow, task distribution, and code reviews. Focused on building clean, responsive user interfaces while ensuring the team followed best practices in UI/UX and frontend development.
                   </p>
                   <div className="achievements">
                     <h4>Key Achievements</h4>
                     <ul>
                       <li>Successfully completed the project as the lead intern, showcasing strong leadership and project management skills</li>
                       <li>Utilized technologies including HTML, CSS, JavaScript and Bootstrap 5 to deliver a robust and scalable solution</li>
                       <li>Gained hands-on experience in frontend web development and team coordination</li>
                       <li>Managed task distribution and conducted code reviews for the development team</li>
                     </ul>
                   </div>
                   <div className="tech-stack">
                     <div className="tech-item">HTML</div>
                     <div className="tech-item">CSS</div>
                     <div className="tech-item">JavaScript</div>
                     <div className="tech-item">Bootstrap 5</div>
                   </div>
                 </div>
               </div>
             </div>

            

                         <div className="timeline-item">
               <div className="timeline-marker">
                 <div className="marker-ring"></div>
                 <div className="marker-dot"></div>
               </div>
               <div className="timeline-content">
                 <div className="content-header">
                   <div className="role-info">
                     <h3 className="role-title">Blockchain Developer Intern</h3>
                     <div className="company-info">
                       <span className="company-name">Ranchimall Javascript Internshala</span>
                       <span className="duration">November 2024 - January 2025</span>
                     </div>
                   </div>
                   <div className="role-badge intern-badge">
                     <span className="badge-text">Internship</span>
                   </div>
                 </div>
                 <div className="content-body">
                   <p className="role-description">
                     Worked as a Blockchain Developer, where I implemented a JavaScript-based functionality to fetch and display the total USDT balance from a user's wallet. This feature solved a key issue in the project by ensuring accurate and real-time visibility of wallet funds.
                   </p>
                   <div className="achievements">
                     <h4>Key Achievements</h4>
                     <ul>
                       <li>Implemented JavaScript-based functionality to fetch and display USDT balance from user wallets</li>
                       <li>Applied frontend technologies such as HTML, CSS to create responsive and interactive user interfaces</li>
                       <li>Collaborated with a team to implement features and enhance the overall user experience of the application</li>
                       <li>Solved key project issues by ensuring accurate and real-time visibility of wallet funds</li>
                     </ul>
                   </div>
                   <div className="tech-stack">
                     <div className="tech-item">JavaScript</div>
                     <div className="tech-item">HTML</div>
                     <div className="tech-item">CSS</div>
                     <div className="tech-item">UHTML</div>
                     <div className="tech-item">Git</div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`skills-section ${activeSection === 'skills' ? 'active' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-decoration">✦</span>
              Technical Expertise
              <span className="title-decoration">✦</span>
            </h2>
            <div className="section-subtitle">My technical arsenal</div>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  <span className="icon-emoji">🎨</span>
                  <div className="icon-glow"></div>
                </div>
                <h3>Frontend Development</h3>
              </div>
              <div className="skill-items">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">HTML</span>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '95%' }}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">CSS</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">JavaScript</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">HTML5 & CSS3</span>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '95%' }}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Bootstrap</span>
                    <span className="skill-percentage">70%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '70%' }}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  <span className="icon-emoji">⚙️</span>
                  <div className="icon-glow"></div>
                </div>
                <h3>Frontend Development</h3>
              </div>
              <div className="skill-items">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">ReactJS</span>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">NextJS</span>
                    <span className="skill-percentage">85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">REST APIs</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '95%' }}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Taiwind css</span>
                    <span className="skill-percentage">80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '70%' }}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            

            <div className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  <span className="icon-emoji">🛠️</span>
                  <div className="icon-glow"></div>
                </div>
                <h3>Tools & Platforms</h3>
              </div>
              <div className="skill-items">
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Git & GitHub</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">VS code</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">Cursor</span>
                    <span className="skill-percentage">90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}>
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>
                 
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta">
          <div className="cta-content">
            <h2>Ready to collaborate?</h2>
            <p>Let's build something amazing together</p>
            <div className="cta-buttons">
              <button className="cta-btn primary" onClick={() => handleContactClick('email')}>
                <span>Get in Touch</span>
                <div className="btn-glow"></div>
              </button>
              <button className="cta-btn secondary" onClick={() => handleContactClick('linkedin')}>
                <span>View LinkedIn</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ExperiencePage;
