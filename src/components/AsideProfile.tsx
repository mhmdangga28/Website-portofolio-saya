import profileImage from '../assets/img/profilsaya.jpeg';

export default function AsideProfile() {
  return (
    <header className="side">
      <div className="aside">
        <div className="aside-content">
          <h1>Rangga</h1>
          <p>
            Web developer & <br />
            Content creator
          </p>
        </div>

        <img src={profileImage} alt="profile" />

        <p>ranggaridjali@gmail.com</p>
        <p>Base in Bandung, ID</p>

        <div className="contact-list">
          <a href="https://www.linkedin.com/in/mhmdanggarjl/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
          <a href="https://www.instagram.com/mhmrang925_/?hl=en" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram fa-xl"></i>
          </a>
          <a href="https://github.com/mhmdangga28" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <a href="https://www.tiktok.com/@mhmrang925_" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-tiktok fa-xl"></i>
          </a>
        </div>

        <button
          onClick={() => {
            const section = document.getElementById('contact');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <a>WORK WITH ME</a>
        </button>

        <p>
          © 2026 Muhammad Rangga. <br />
          All Rights Reserved
        </p>
      </div>
    </header>
  );
}
