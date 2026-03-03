export default function ResumeSection() {
  return (
    <section className="tree" id="resume">
      <div className="main-intro">
        <i className="fa-solid fa-file"></i>
        <p>RESUME</p>
      </div>

      <span className="resume-label">Experience</span>
      <div className="resume-wrapper">
        <div className="resume-item1">
          <div className="resume-content">
            <div className="resume-row">
              <div className="resume-marker"></div>
              <p className="resume-meta">Bangkit Academy (September - Desember 2024)</p>
            </div>
            <p className="resume-title">Cloud Engineer</p>
            <p className="resume-meta">Deploy & operate services on Cloud Run, manage Cloud SQL/Firestore, optimize costs</p>
            <p className="resume-title">Backend Developer</p>
            <p className="resume-meta">Build & test Express.js REST APIs for mobile, support ML integration</p>
          </div>
        </div>

        <div className="resume-item2">
          <div className="resume-content">
            <div className="resume-row">
              <div className="resume-marker"></div>
              <p className="resume-meta">Institut Teknologi Nasional (September 2024 - January 2025)</p>
            </div>
            <p className="resume-title">Laboratory Assistant</p>
            <p className="resume-meta">Managing IoT lab devices, assisting with practicals/projects, guiding students, and compiling modules and documentation</p>
          </div>
        </div>

        <div className="resume-item3">
          <div className="resume-content">
            <div className="resume-row">
              <div className="resume-marker"></div>
              <p className="resume-meta">PS4 Lembang Agri (September 2024 - January 2025)</p>
            </div>
            <p className="resume-title">Full Stack Developer</p>
            <p className="resume-meta">Developed a website and API to capture, manage, and visualize sensor data, including configuring 6 sensors to send data to Firebase</p>
          </div>
        </div>
      </div>

      <span className="resume-label">Education</span>
      <div className="resume-wrapper">
        <div className="resume-item4">
          <div className="resume-content">
            <div className="resume-row">
              <div className="resume-marker"></div>
              <p className="resume-meta">2021 - 2026</p>
            </div>
            <p className="resume-title">Bachelor of Engineering</p>
            <p className="resume-meta"> National Institute of Technology</p>
            <p className="resume-meta"> GPA 3.25 / 4.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
