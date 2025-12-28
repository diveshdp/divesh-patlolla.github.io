import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";


export const useTemplateFeatures = () => {
  useEffect(() => {
    /** Animation on scroll */
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    /** Typed text effect */
    const typedElement = document.querySelector(".typed") as HTMLElement;
    let typed: Typed | null = null;

    if (typedElement) {
      const strings = typedElement.dataset.typedItems?.split(",") || [];
      typed = new Typed(".typed", {
        strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }

    /** Back to top button */
    const backToTop = document.querySelector(".back-to-top");
    const toggleBackToTop = () => {
      if (window.scrollY > 100) backToTop?.classList.add("active");
      else backToTop?.classList.remove("active");
    };

    window.addEventListener("scroll", toggleBackToTop);

    return () => {
      window.removeEventListener("scroll", toggleBackToTop);
      typed?.destroy();
    };
  }, []);
};
