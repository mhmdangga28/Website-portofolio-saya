import arrowImage from '../assets/img/down-arrow.png';

export default function HomeSection() {
  return (
    <section className="one" id="home">
      <div className="main-intro">
        <i className="fa-solid fa-house fa-sm"></i>
        <p>INTRODUCE</p>
      </div>

      <p className="greeting">
        Hi from <span>Rangga</span>, <br />
        Fullstack Developer, <br />
        Cloud Engineer, <br />
        and IoT Engineer
      </p>

      <p className="home-desc">
        Creating engaging digital experiences that connect users to technology seamlessly.
        <br />
        Enhancing satisfaction through efficient interactions
      </p>

      <a href="#project">
        <div className="logo-container">
          <img style={{ width: 65, height: 65 }} src={arrowImage} alt="" />

          <svg className="rotating-text" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" height="200" width="200">
            <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="1" fill="none" />
            <path id="circlePath" d="M 20, 60 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0" fill="none" />
            <text style={{ fill: 'white', fontSize: 11, letterSpacing: 1 }}>
              <textPath href="#circlePath">My Projects &nbsp; &nbsp; • &nbsp; &nbsp; My Projects &nbsp; &nbsp; &nbsp; • &nbsp; &nbsp;</textPath>
            </text>
          </svg>
        </div>
      </a>
    </section>
  );
}
