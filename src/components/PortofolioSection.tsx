export default function PortofolioSection() {
  return (
    <section className="five" id="project">
      <div className="main-intro">
        <i className="fa-solid fa-screwdriver-wrench"></i>
        <p>PORTOFOLIO</p>
      </div>

      <p className="greeting-about">
        Best <span>Portofolios</span>
      </p>

      <div className="portofolio-wrapper">
        <div className="portofolio-list">
          <div className="porto-card">
            <div className="porto-container">
              <div className="portofolio-item">
                <img src="/src/assets/img/3.png" alt="" />
              </div>
            </div>
            <p className="porto-caption">Full Stack Developer & IoT Engineer</p>
          </div>

          <div className="porto-card">
            <div className="porto-container">
              <div className="portofolio-item">
                <img src="/src/assets/img/4.png" alt="" />
              </div>
            </div>
            <p className="porto-caption">Cloud Engineer & Backend Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
