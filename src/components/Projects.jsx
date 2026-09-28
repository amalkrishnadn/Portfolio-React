import "./projects.css";

const Projects = () => {
  const projects = [
    {
      title: "RecLogix",
      description:
        "A personalized health record platform that allows users to upload medical documents and interact with an AI-powered chatbot.",
      technologies: ["Next.js", "React", "Supabase", "AI"],
      github: "https://github.com/amalkrishnadn/RecLogix.git",
      demo: "https://rec-logix.vercel.app/",
    },
    {
      title: "GitHub User Search",
      description:
        "A Webpage that searches GitHub users using the GitHub API and displays profile information.",
      technologies: ["JavaScript", "GitHub API", "Local Storage"],
      github: "https://github.com/amalkrishnadn/Github-User-Search.git",
      demo: "https://amalkrishnadn.github.io/Github-User-Search/",
    },
    {
      title: "IMDB Movie Search",
      description:
        "A Webpage that searches movies using the IMDB API and displays movie information.",
      technologies: ["HTML", "JavaScript", "Bootstrap", "CRUD"],
      github: "https://github.com/amalkrishnadn/IMDB-.git",
      demo: "https://amalkrishnadn.github.io/IMDB-/",
    },
    {
      title: "Local Storage CRUD",
      description:
        "A simple employee management CRUD application using local storage for data persistence.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/amalkrishnadn/Local-Storage-CRUD.git",
      demo: "https://amalkrishnadn.github.io/Local-Storage-CRUD/",
    },
    {
      title: "Async Await Demo",
      description:
        "A simple demonstration of async/await in JavaScript, showcasing how to handle asynchronous operations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/amalkrishnadn/asyncAwait.git",
      demo: "https://amalkrishnadn.github.io/asyncAwait/",
    },
    {
      title: "Time Freezing Wristwatch",
      description:
        "A creative project that simulates a time-freezing wristwatch using HTML and CSS animations.",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/amalkrishnadn/time-freezing-writs-watch.git",
      demo: "https://amalkrishnadn.github.io/time-freezing-writs-watch/",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">

        <div className="section-header">
          <span className="section-index">04</span>
          <span className="section-label">Projects</span>
          <div className="section-line"></div>
          <span className="section-count">{projects.length} PROJECTS</span>
        </div>

        <div className="projects-list">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-card-inner">

                <div className="project-header">
                  <span className="project-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="project-status">
                    <span className="project-status-dot"></span>
                    <span>LIVE</span>
                  </div>
                </div>

                <h2 className="project-title">{project.title}</h2>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link github-link"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link demo-link"
                  >
                    Live Demo ↗
                  </a>
                </div>

              </div>

              {/* Accent line that grows on hover */}
              <div className="project-accent-line"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;