import React from "react";

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={require("../assets/1.png")}
          alt="Dewanshi-Dhote-pic"
          id="profile-logo"
          data-aos="fade-right"
          data-aos-delay="50"
        />
      </div>
      <div className="section__text" data-aos="fade-left" data-aos-delay="50">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Dewanshi Dhote</h1>
        <p className="section__text__p2">WEB Developer</p>
        <div className="btn-container">
          <a
            // href="https://drive.google.com/file/d/1chkYrvO7R6mebib21FoL8lD9cC2rk3OI/view?usp=sharing"
            href="https://www.canva.com/design/DAGIXvxcYoA/_cYwh1mMSa_zYys8uij8Lw/view?utm_content=DAGIXvxcYoA&utm_campaign=designshare&utm_medium=link&utm_source=editor"
            download="DewanshiDhoteResume"
            type="pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="btn btn-color-2"
              // onClick={() => window.open("../assets/himanshu-khade-resume.pdf")}
            >
              Download CV
            </button>
          </a>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/dewanshi-dhote-1622b31b6/"
            type="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../assets/linkedin.png")}
              alt="My LinkedIn profile"
              className="icon"
              // onClick={() =>
              //   (window.location.href =
              //     "https://github.com/DewanshiDhote")
              // }
            />
          </a>
          <a
            href="https://github.com/DewanshiDhote"
            type="link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../assets/github.png")}
              alt="My Github profile"
              className="icon"
              onClick={() =>
                (window.location.href = "https://github.com/DewanshiDhote")
              }
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
