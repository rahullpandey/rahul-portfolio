import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Projects
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Personal Projects</h4>
                <h5>GitHub</h5>
              </div>
              <h3>2024–2026</h3>
            </div>
            <p>
              Built projects like an explainable-AI Alzheimer diagnosis study
              and the Rahul Engineering website.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech (Computer Science)</h4>
                <h5>Lovely Professional University (LPU), Punjab</h5>
              </div>
              <h3>2022–2025</h3>
            </div>
            <p>
              Completed a focused program in software development, data
              structures, and problem solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma</h4>
                <h5>PIIT, Greater Noida</h5>
              </div>
              <h3>Diploma</h3>
            </div>
            <p>
              Built foundational programming and computer science skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
