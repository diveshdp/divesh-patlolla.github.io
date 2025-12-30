import React from "react";
import SchoolIcon from "@mui/icons-material/School";
class Header extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.scrollto = this.scrollto.bind(this);
    this.select = this.select.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.navbarlinksActive);
    this.onscroll(document, this.navbarlinksActive);

    this.on("click", ".mobile-nav-toggle", function (this: HTMLElement, e: Event) {
      document.querySelector("body")?.classList.toggle("mobile-nav-active");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });

    this.on(
      "click",
      ".scrollto",
      function (this: HTMLAnchorElement, e: Event) {
        if (document.querySelector(this.hash)) {
          e.preventDefault();

          const body = document.querySelector("body");
          if (body?.classList.contains("mobile-nav-active")) {
            body.classList.remove("mobile-nav-active");
            const navbarToggle = document.querySelector(".mobile-nav-toggle");
            navbarToggle?.classList.toggle("bi-list");
            navbarToggle?.classList.toggle("bi-x");
          }

          const elementPos = document.querySelector(this.hash)?.offsetTop || 0;
          window.scrollTo({
            top: elementPos,
            behavior: "smooth",
          });
        }
      },
      true
    );
  }

  select(el: string, all = false): HTMLElement | HTMLElement[] | null {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)] as HTMLElement[];
    } else {
      return document.querySelector(el) as HTMLElement | null;
    }
  }

  on(
    type: string,
    el: string,
    listener: EventListenerOrEventListenerObject,
    all = false
  ) {
    const selectEl = this.select(el, all);
    if (selectEl) {
      if (all && Array.isArray(selectEl)) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else if (selectEl instanceof HTMLElement) {
        selectEl.addEventListener(type, listener);
      }
    }
  }

  onscroll(el: HTMLElement | Document, listener: EventListener) {
    el.addEventListener("scroll", listener);
  }

  scrollto(el: string) {
    const elementPos = document.querySelector(el)?.offsetTop || 0;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  }

  navbarlinksActive = () => {
    const navbarlinks = document.querySelectorAll<HTMLElement>("#navbar .scrollto");
    const position = window.scrollY + 200;

    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      const section = document.querySelector(navbarlink.hash);
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

  render() {
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
  }
}

export default Header;
