import "./skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-container">

        <div className="section-header">
          <span className="section-index">03</span>
          <span className="section-label">Skills</span>
          <div className="section-line"></div>
          <span className="section-count">4 CATEGORIES</span>
        </div>

        <div className="skills-grid">

          <div className="skill-panel">
            <div className="skill-panel-head">
              <span className="skill-panel-num">01</span>
              <h2>Frontend</h2>
              <span className="skill-panel-count">6 skills</span>
            </div>
            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span className="tag-accent">React</span>
              <span>Bootstrap</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          <div className="skill-panel">
            <div className="skill-panel-head">
              <span className="skill-panel-num">02</span>
              <h2>Backend</h2>
              <span className="skill-panel-count">4 skills</span>
            </div>
            <div className="skill-tags">
              <span className="tag-accent">Node.js</span>
              <span>Express.js</span>
              <span>REST API</span>
              <span>CRUD</span>
            </div>
          </div>

          <div className="skill-panel">
            <div className="skill-panel-head">
              <span className="skill-panel-num">03</span>
              <h2>Database</h2>
              <span className="skill-panel-count">3 skills</span>
            </div>
            <div className="skill-tags">
              <span className="tag-accent">MongoDB</span>
              <span>Supabase</span>
            </div>
          </div>

          <div className="skill-panel">
            <div className="skill-panel-head">
              <span className="skill-panel-num">04</span>
              <h2>Tools</h2>
              <span className="skill-panel-count">5 skills</span>
            </div>
            <div className="skill-tags">
              <span className="tag-accent">Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Vercel</span>
              <span>Postman</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;