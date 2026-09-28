import profileImage from "../assets/AboutPage.png";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">

        <div className="section-header">
          <span className="section-index">02</span>
          <span className="section-label">About</span>
          <div className="section-line"></div>
        </div>

        <div className="about-body">

          <div className="about-image-panel">
            <div className="about-image-wrapper">
              <img src={profileImage} alt="Amal Krishna" />
              <div className="about-image-overlay"></div>
            </div>

            <div className="about-metadata">
              <div className="meta-row">
                <span className="meta-key">STATUS</span>
                <span className="meta-val meta-val-live">
                  <span className="meta-dot"></span>
                  Available
                </span>
              </div>
              <div className="meta-row">
                <span className="meta-key">LOCATION</span>
                <span className="meta-val">India</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">FOCUS</span>
                <span className="meta-val">Web Dev</span>
              </div>
            </div>
          </div>

          <div className="about-content">

            <h1 className="about-heading">
              I'm a Full Stack<br />
              Developer based<br />
              in India.
            </h1>

            <div className="about-bio">
              <p>
                I'm a Computer Science and Engineering graduate with a strong
                interest in web development and modern technologies. I enjoy
                building responsive and interactive web applications.
              </p>
              <p>
                I work with technologies such as HTML, CSS, JavaScript, React,
                Node.js and MongoDB. I also have an interest in artificial
                intelligence and automation.
              </p>
              <p>
                My goal is to continuously improve my technical skills and build
                useful applications that solve real-world problems.
              </p>
            </div>

            <div className="about-details">

              <div className="detail-item">
                <span className="detail-key">Name</span>
                <span className="detail-val">Amal Krishna D N</span>
              </div>

              <div className="detail-item">
                <span className="detail-key">Role</span>
                <span className="detail-val">Full Stack Developer</span>
              </div>

              <div className="detail-item">
                <span className="detail-key">Education</span>
                <span className="detail-val">B.Tech Computer Science</span>
              </div>

              <div className="detail-item">
                <span className="detail-key">Interest</span>
                <span className="detail-val">AI · Automation · Web Dev</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;