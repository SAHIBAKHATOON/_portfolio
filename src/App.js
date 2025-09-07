import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import ContactPage from './components/ContactPage';
import ExperiencePage from './components/ExperiencePage';
import ResumePage from './components/ResumePage';
import './App.css';


function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };
  
  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-icons">
          <div className="icon-wrapper" onClick={() => handleNavigation('/')}>
            <i className="fas fa-user-friends"></i>
            <div className="tooltip">Profile</div>
          </div>
          <div className="icon-wrapper" onClick={() => window.open('https://docs.google.com/document/d/13VOb0QdC9aR8H3qq2RbKiRtrLzGCfFcZ/edit#heading=h.1fob9te', '_blank')}>
            <i className="fas fa-file-alt"></i>
            <div className="tooltip">Resume</div>
          </div>
          <div className="icon-wrapper" onClick={() => handleNavigation('/portfolio')}>
            <i className="fas fa-layer-group"></i>
            <div className="tooltip">Portfolio</div>
          </div>
          <div className="icon-wrapper" onClick={() => handleNavigation('/experience')}>
            <i className="fas fa-clipboard-list"></i>
            <div className="tooltip">Experience</div>
          </div>
          <div className="icon-wrapper" onClick={() => handleNavigation('/contact')}>
            <i className="fas fa-paper-plane"></i>
            <div className="tooltip">Contact</div>
          </div>
        </div>
      </aside>
    </>
  );
}

function Profile({ onTabChange, activeTab }) {
  const navigate = useNavigate();
  
  return (
    <section className="profile-section">
      <img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="Profile" />
      <h2>Sahiba Ansari</h2>
      <div className="subtitle">Human Software Engineer</div>
      <div className="profile-actions">
        <button className="btn btn-green" onClick={() => navigate('/portfolio')}>View Portfolio</button>
        <button className="btn btn-pink" onClick={() => window.open('https://docs.google.com/document/d/13VOb0QdC9aR8H3qq2RbKiRtrLzGCfFcZ/edit#heading=h.1fob9te', '_blank')}>View Resume</button>
      </div>
      <div className="bio">
        <b>SHORT BIO</b>
        <p>Hi, I'm Sahiba Ansari — a passionate frontend developer with one year of hands-on experience building responsive, user-focused web applications. I specialize in designing sleek, modern interfaces that not only function smoothly but leave a lasting impression.</p>
        <p>When I'm not turning lines of code into beautiful UI, you'll find me exploring the latest in AI — using smart tools to boost efficiency, spark creativity, and sometimes just to see what tech can surprise me next.</p>
        <p>I'm always excited to bring ideas to life through clean code and thoughtful design. Let's team up and build something meaningful — or at the very least, something that works like magic and looks even better.</p>
      </div>
      <div className="tabs-wrapper">
        <div className="tabs-full-line"></div>
        <div className="tabs">
          <button className={activeTab === 'skills' ? 'tab active' : 'tab'} onClick={() => onTabChange('skills')}>My Skills</button>
          <button className={activeTab === 'experience' ? 'tab active' : 'tab'} onClick={() => onTabChange('experience')}>Experience</button>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="card education-card">
      <h3>Education</h3>
      <div>
        <b>Bachelor of Science (B.Sc.)</b>
        <ul>
          <li>Computer Engineering</li>
          <li>Deen Dayal Upadhayaya Gorakhpur University</li>
          <li>CGPA: 8.1 [2021 – 2024]</li>
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const navigate = useNavigate();
  
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
    <section className="card contact-card">
      <h3>👋 Thanks for visiting my <br/> site!</h3>
      <div>Glad to have you here.</div>
      <div className="connect" onClick={() => navigate('/contact')} style={{ cursor: 'pointer' }}>Let's Connect</div>
      <div className="social-icons">
        <div onClick={() => handleContactClick('github')} style={{ cursor: 'pointer' }}><i className="icon-github"></i></div>
        <div onClick={() => handleContactClick('linkedin')} style={{ cursor: 'pointer' }}><i className="icon-linkedin"></i></div>
        <div onClick={() => handleContactClick('email')} style={{ cursor: 'pointer' }}><i className="icon-mail"></i></div>
        <div onClick={() => handleContactClick('phone')} style={{ cursor: 'pointer' }}><i className="icon-whatsapp"></i></div>
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: "Front End",
      skills: [
        { name: "HTML", icon: "🌐", color: "#FFD700" },
        { name: "CSS", icon: "🎨", color: "#FFD700" },
        { name: "JavaScript", icon: "JS", color: "#FFD700" },
        { name: "React.JS", icon: "⚛", color: "#FFD700" },
        { name: "Next.js", icon: "⚡", color: "#FFD700" },
        { name: "Tailwind CSS", icon: "🎯", color: "#FFD700" },
        { name: "Bootstrap", icon: "B", color: "#FFD700" },
        { name: "XML", icon: "</>", color: "#FFD700" }
      ]
    },
    
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: "📦", color: "#4ECDC4" },
        { name: "VS Code", icon: "💻", color: "#4ECDC4" },
        { name: "Figma", icon: "🎨", color: "#4ECDC4" },
        { name: "Cursor AI", icon: "🖱️", color: "#4ECDC4" },
        { name: "npm", icon: "📦", color: "#4ECDC4" },
        { name: "GitHub", icon: "🐙", color: "#4ECDC4" }
      ]
    }
  ];

  return (
    <div className="skills-content">
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="skill-category">
          <h3 className="skill-category-title">{category.title}</h3>
          <div className="skill-tags">
            {category.skills.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="skill-tag"
                style={{ borderColor: skill.color }}
              >
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Quality Outside Private Limited (Chennai)",
      date: "Jan 2025 - Jan 2025",
      color: "#3ecf8e",
      bullets: [
        "Developed and maintained 5+ enterprise web applications",
        "Developed a secure and responsive login page, enhancing user authentication flow",
        "Implemented new features and improved existing functionality to boost user experience",
        "Collaborated with the team to ensure smooth integration of frontend components"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Salesqueen Software Sloutions",
      date: "April 2024 - June 2024",
      color: "#2db7f5",
      bullets: [
        "Lead a team of 10 frontend developers, managing the overall workflow, task distribution, and code reviews. Focused on building clean, responsive user interfaces while ensuring the team followed best practices in UI/UX and frontend development.",
        "Successfully completed the project as the lead intern, showcasing strong leadership and project management skills.",
        "Utilized technologies including HTML, CSS, JavaScript and Bootstrap 5 to deliver a robust and scalable solution.",
        "Gained hands-on experience in frontend web development and team coordination."
      ]
    },
    {
      title: "Blockchain Developer Intern",
      company: "Ranchimall Javascript Internshala",
      date: "July 2024 -  Oct 2025",
      color: "#6c63ff",
      bullets: [
        "Worked as a Blockchain Developer, where I implemented a JavaScript-based functionality to fetch and display the total USDT balance from a user's wallet. This feature solved a key issue in the project by ensuring accurate and real-time visibility of wallet funds.",
        "Applied frontend technologies such as HTML, CSS to create responsive and interactive user interfaces.",
        "Collaborated with a team to implement features and enhance the overall user experience of the application."
      ]
    },
    {
      title: "Frontend Developer",
      company: "Alphabuy Private Limited (Remote)",
      date: "Nov 2024 -  Jan 2025",
      color: "#3ecf8e",
      bullets: [
        "Developed a comprehensive admin dashboard for e-commerce product management with dynamic data visualization and advanced pagination system.",
        "Created intuitive category filtering system with real-time search functionality and responsive product listing interface.",
        "Integrated REST API endpoints for seamless data fetching and manipulation, collaborating with backend team for optimal performance.",
        "Implemented modern UI/UX patterns using Next.js and Tailwind CSS, optimizing dashboard performance for handling 1000+ products.",
        "Built responsive product listing interface with sorting and filtering capabilities for enhanced user experience.",
        "Collaborated with backend team to ensure optimal API performance and data structure for seamless integration.",
        "Utilized Next.js features for server-side rendering and improved performance optimization.",
        "Maintained code quality and version control using Git for collaborative development workflow.",
        "Optimized dashboard performance for handling large-scale e-commerce operations with smooth user experience."
      ]
    }
  ];

  return (
    <div className="experience-timeline">
      {experiences.map((exp, idx) => (
        <div className="timeline-item" key={idx}>
          <div className="timeline-dot" style={{ background: exp.color }}></div>
          <div className="timeline-content">
            <div className="timeline-title">{exp.title}</div>
            <div className="timeline-company">
              <b>{exp.company}</b>
              <span className="timeline-date">{exp.date}</span>
            </div>
            <ul>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function HomePage() {
  const [activeTab, setActiveTab] = useState('experience');
  
  return (
    <main className="main-content">
      <div className="main-left">
        <Profile onTabChange={setActiveTab} activeTab={activeTab} />
        {activeTab === 'skills' ? <Skills /> : <Experience />}
      </div>
      <div className="main-right">
        <Education />
        <Contact />
      </div>
    </main>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <Router>
      <div className="app-layout">
        <Sidebar 
          isMobileMenuOpen={isMobileMenuOpen} 
          setIsMobileMenuOpen={setIsMobileMenuOpen} 
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;