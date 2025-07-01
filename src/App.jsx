import react, { useRef, useEffect, useState } from "react";
import NavBar from "./develop/layouts/navBar";
import Home from "./develop/layouts/home";
import { Footer } from "./develop/layouts/footer";
import { AboutMe } from "./develop/layouts/aboutMe";
import { Services } from "./develop/layouts/services";
import MyProjects from "./develop/layouts/myProjects";
import Testimonials from "./develop/layouts/testimonials";
import TestimonialRow from "./develop/layouts/testimonials";
import Contact from "./develop/layouts/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    services: servicesRef,
    projects: projectsRef,
    testimonials: testimonialsRef,
    contact: contactRef,
  };

  const scrollToSection = (section) => {
    const ref = sectionRefs[section];
    setActiveSection(section);
    if (ref?.current) {
      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      const sectionTop =
        ref.current.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  // Detect scroll position to set active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setActiveSection(""); // Not at top
      } else {
        setActiveSection("home"); // Top of page
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case we're not at top on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex flex-col w-full gap-20 bg-transparent"
      style={{
        borderBottom: "2px solid transparent",
        borderImage:
          "linear-gradient(to right, transparent, red, transparent) 1", // Gradient effect
        width: "100%",
      }}
    >
      <div className="fixed z-50">
        <NavBar onScrollTo={scrollToSection} />
      </div>
      <div ref={homeRef}>
        <Home onScrollTo={scrollToSection} />
      </div>
      <div className="" ref={aboutRef}>
        <AboutMe />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={projectsRef}>
        <MyProjects />
      </div>
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Footer onScrollTo={scrollToSection} />
      </div>
      {activeSection !== "home" ? (
        <FontAwesomeIcon
          onClick={() => scrollToSection("home")}
          className="fixed  text-5xl z-50 bottom-0 right-0 md:mb-7 md:mr-10 mb-7 mr-5 dark:text-orange-700"
          icon={faCircleArrowUp}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
