export default function AboutSection() {
  return (
    <section className="two" id="about">
      <div className="main-intro">
        <i className="fa-solid fa-address-card"></i>
        <p>ABOUT</p>
      </div>

      <p className="greeting-about">
        Every aspiration flourishes in the soil <br />
        of curiosity and the pursuit <br />
        of wisdom.
      </p>

      <p className="about-journey">
        My journey as a full-stack developer began in college, where I first explored frontend technologies like HTML, CSS, and JavaScript, creating engaging websites that enhanced user experiences. As my passion grew, I transitioned to
        backend development, mastering languages like Node.js and Python to build robust applications. Each project deepened my understanding of database management and API integration, allowing me to bridge the gap between frontend and
        backend effectively. Through dedication and continuous learning.
      </p>

      <div className="about-exp">
        <div className="experience">
          <p>5+</p>
          <p>MOUNTH OF EXPERIENCE</p>
        </div>
        <div className="experience">
          <p>5+</p>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </section>
  );
}
