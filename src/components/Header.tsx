import React from "react";

class Header extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.scrollto = this.scrollto.bind(this);
    this.select = this.select.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.navbarlinksActive);
    this.onscroll(document, this.navbarlinksActive);

    this.on("click", ".scrollto", (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      if (target.hash && document.querySelector(target.hash)) {
        e.preventDefault();
        this.scrollto(target.hash);
      }
    });
  }

  select(el: string, all = false) {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  }

  on(type: string, el: string, listener: EventListenerOrEventListenerObject, all = false) {
    const selectEl = this.select(el, all);
    if (!selectEl) return;

    if (all && Array.isArray(selectEl)) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      (selectEl as HTMLElement).addEventListener(type, listener);
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
      <header id="header" className="header d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar flex-column sidebar-nav">
          <a href="#hero" className="nav-link scrollto active">
            <i className="bi bi-house-door"></i>
            <span>Home</span>
          </a>

          <a href="#about" className="nav-link scrollto">
            <i className="bi bi-person"></i>
            <span>About</span>
          </a>

          <a href="#experience" className="nav-link scrollto">
            <i className="bi bi-briefcase"></i>
            <span>Experience</span>
          </a>

          <a href="#projects" className="nav-link scrollto">
            <i className="bi bi-kanban"></i>
            <span>Projects</span>
          </a>

          <a href="#education" className="nav-link scrollto">
            <i className="bi bi-mortarboard"></i>
            <span>Education</span>
          </a>

          <a href="#contact" className="nav-link scrollto">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
