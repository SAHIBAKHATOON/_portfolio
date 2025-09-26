import React, { useState } from 'react';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: "LetterFix",
      description: "A modern, responsive portfolio website showcasing my skills and projects with animated UI and smooth interactions.",
      role: "Frontend Developer",
      tech: "HTML | BOOTSTRAP | CSS3 | JavaScript",
      client: "Personal Project",
      category: "Web-App",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=center",
      githubUrl: "https://sahibakhatoon.github.io/Letterfix-project/",
      // liveUrl: "https://sahiba-portfolio.netlify.app",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Website",
      description: "A modern, responsive e-commerce website with a clean and intuitive design, featuring a product catalog, shopping cart, and checkout process.",
      role: "Software Developer",
      tech: "HTML |  CSS |  JAVASCRIPT | Bootstrap |  REACTJS | USESTATE ",
      client: "Personal Project",
      category: "Software",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
      // githubUrl: "https://github.com/SAHIBAKHATOON/resume-scanner",
      liveUrl: "https://e-commerce-xibh.vercel.app/",
      featured: true
    },
    {
      id: 3,
      title: "kirana-App",
      description: "A modern, responsive e-commerce website with a clean and intuitive design, featuring a product catalog, shopping cart, and checkout process.",
      role: "Software Developer",
      tech:  "HTML |  CSS |  JAVASCRIPT | Bootstrap |  REACTJS | USESTATE ",
      client: "Personal Project",
      category: "Software",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center",
      githubUrl: "https://github.com/SAHIBAKHATOON/kirana-app",
      liveUrl: "https://kirana-35f42tvy3-sahibakhatoon2023-gmailcom.vercel.app/"
    },
    {
      id: 4,
      title: "BOT-App",
      description: "In this project, I created a bot app that allows users to send messages to a specific number. The app is built using HTML, CSS, and JavaScript.",
      role: "Frontend Developer",
      tech:  "HTML |  CSS |  JAVASCRIPT",
      client: "Internship Project",
      category: "Web-App",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop&crop=center", // Code/data themed image
      githubUrl: "https://github.com/developersqobox-org/bot_frontend",
      liveUrl: "https://extreamlab.abracadabra.org.in/"
    },
    {
      id: 5,
      title: "Cortmex-App",
      description: "In this project, I created a cortmex app login page and a dashboard page. The app is built using HTML, CSS, and JavaScript.",
      role: "Frontend Developer",
      tech: "HTML  | CSS3 | JavaScript",
      client: "Full-time Project",
      category: "Web-App",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center",
      githubUrl: "",
      liveUrl: "https://cortexmed.in/login",
      featured: true
    },
    {
      id: 6,
      title: " Snickr-App",
      description: "In this project, I created  whole applicatuon UI and added chart with data. ",
      role: "Frontend Developer",
      tech: "HTML  | CSS3 | JavaScript",
      client: "Full-time Project",
      category: "Web-App",
      // Different code/data themed image
      githubUrl: "",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop&crop=center",
      liveUrl: "https://www.snickr.in/",
      featured: true
      },
      {
        id: 7,
        title: "Password Generator",
        description: "A simple and secure password generator app that allows users to create strong, random passwords with customizable options such as length and character types. Built with React and Hooks for a responsive UI.",
        role: "Frontend Developer",
        tech: "React.JS, Hooks",
        client: "Personal Project",
        category: "Web-App",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center", // Different code/data themed image

         // Different code/data themed image
          githubUrl: "https://github.com/SAHIBAKHATOON/Password-generator",
          liveUrl: "https://password-generator-five-wine.vercel.app/",
          featured: false
            },

            {
            id: 8,
            title: "Recipe-App",
            description: "A recipe app that allows users to search for recipes, view detailed instructions, and explore ingredients. Built with React and integrates with a public recipes API for real-time data.",
            role: "Frontend Developer",
            tech: "CSS | React.JS | API",
            client: "Personal Project",
            category: "Web-App",
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop&crop=center",
            // Recipe/food themed image
            githubUrl: "https://github.com/SAHIBAKHATOON/Recepi-app",
            liveUrl: "https://recepi-app.vercel.app/",
            featured: true
            },

            {
              id: 9,
              title: "To-do app",
              description: "A simple to-do app that allows users to create, manage, and delete tasks. Built with React and local storage for data persistence.",
              role: "Frontend Developer",
              tech: "CSS | React.JS | Local Storage",
              client: "Personal Project",
              category: "Web-App",
              image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop&crop=center", // To-do list themed image
                // To-do list themed image
                githubUrl: "https://github.com/SAHIBAKHATOON/Todo-list",
                liveUrl: "https://todo-list-gules-two.vercel.app/",
                featured: true
                },

                {
                id: 10,
                title: "Stop Watch App",
                description: "A digital stopwatch application that allows users to start, stop, and reset the timer. Built with React, featuring accurate time tracking and a clean, responsive UI.",
                role: "Frontend Developer",
                tech: "HTML | CSS|  JAVASCRIPT",
                client: "Personal Project",
                category: "Web-App",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=center", // Stopwatch/code themed image
                githubUrl: "https://github.com/SAHIBAKHATOON/stop-watch",
                liveUrl: "https://sahibakhatoon.github.io/Stop-watch/",
                featured: false
                },
               
            
               
            
       
    
     
    
    
    
    
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // const handleProjectClick = (project) => {
  //   if (project.liveUrl) {
  //     window.open(project.liveUrl, '_blank');
  //   }
  // };

  return (
    <div className="portfolio-page">
      <div className="portfolio-header">
        <h1 className="portfolio-title">
          <span className="gradient-text">My Projects</span>
        </h1>
        
      </div>
      
      <div className="portfolio-filters">
        <button 
          className={activeFilter === 'All' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('All')}
        >
          All
        </button>
        <button 
          className={activeFilter === 'Web-App' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('Web-App')}
        >
          Web-App
        </button>
        <button 
          className={activeFilter === 'Android App' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('Android App')}
        >
          Android App
        </button>
        <button 
          className={activeFilter === 'Software' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setActiveFilter('Software')}
        >
          Software
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-actions">
                  {project.liveUrl && (
                    <button 
                      className="project-btn live-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </button>
                  )}
                  {project.githubUrl && (
                    <button 
                      className="project-btn github-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <i className="fab fa-github"></i>
                      Code
                    </button>
                  )}
                </div>
              </div>
              {project.featured && (
                <div className="featured-badge">
                  <i className="fas fa-star"></i>
                  Featured
                </div>
              )}
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Role:</span>
                  <span className="detail-value">{project.role}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Tech:</span>
                  <span className="detail-value">{project.tech}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Client:</span>
                  <span className="detail-value">{project.client}</span>
                </div>
              </div>
              <div className="project-links">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <i className="fab fa-github"></i>
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
