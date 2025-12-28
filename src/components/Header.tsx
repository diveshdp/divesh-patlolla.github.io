import React, { useEffect } from "react";
import SchoolIcon from "@mui/icons-material/School";

const Header: React.FC = () => {

  const scrollto = (el: string) => {
    const element = document.querySelector(el) as HTMLElement | null;
    if (!element) return;

    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  const navbarlinksActive = () => {
    const navbarlinks = document.querySelectorAll<HTMLElement>("#navbar .scrollto");
    let position = window.scrollY + 200;

    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      const section = document.querySelector(navbarlink.hash) as HTMLElement | null;
      if (!section) return;

      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    navbarlinksActive();
    window.addEventListener("scroll", navbarlinksActive);

    const toggleBtn = document.querySelector(".mobile-nav-toggle");
    const handleToggle = () => {
      document.body.classList.toggle("mobile-nav-active");
      toggleBtn?.classList.toggle("bi-list");
      toggleBtn?.classList.toggle("bi-x");
    };

    toggleBtn?.addEventListener("click", handleToggle);

    return () => {
      window.removeEventListener("scroll", navbarlinksActive);
      toggleBtn?.removeEventListener("click", handleToggle);
    };
  }, []);

  return (
    <div>
      <i
        className="bi bi-list mobile-nav-toggle d-xl-none"
        style={{ color: "rgb(114, 131, 148)" }}
      ></i>

      <header id="header" className="header d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu navbar-expand-sm">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active d-flex justify-content-center">
                <i className="bx bx-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto d-flex justify-content-center">
                <i className="bx bx-user"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#experience" className="nav-link scrollto d-flex justify-content-center">
                <i className="bx bx-briefcase"></i>
                <span>Experience</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link scrollto d-flex justify-content-center">
                <i className="bx bx-code"></i>
                <span>Projects</span>
              </a>
            </li>
            <li>
              <a href="#achievements" className="nav-link scrollto d-flex justify-content-center">
                <i className="bx bx-award"></i>
                <span>Achievements</span>
              </a>
            </li>
            <li>
              <a href="#education" className="nav-link scrollto d-flex justify-content-center">
                <SchoolIcon />
                <span>Education</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
