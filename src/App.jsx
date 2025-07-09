import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import NavBar from "./develop/layouts/navBar";
import Home from "./develop/layouts/home";
import { Footer } from "./develop/layouts/footer";
import { AboutMe } from "./develop/layouts/aboutMe";
import { Services } from "./develop/layouts/services";
import MyProjects from "./develop/layouts/myProjects";
import Testimonials from "./develop/layouts/testimonials";
import Contact from "./develop/layouts/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { BounceLoader } from "react-spinners";
import { useTheme } from "./develop/common/themeProvider";

function AnimatedSection({ children, reference }) {
  const inView = useInView(reference, { once: false });

  return (
    <motion.div
      ref={reference}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setActiveSection("");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex flex-col w-full gap-20 bg-transparent"
      style={{
        borderBottom: "2px solid transparent",
        borderImage:
          "linear-gradient(to right, transparent, red, transparent) 1",
        width: "100%",
      }}
    >
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-opacity-40 ${
            isDark ? "bg-white" : "bg-black"
          }`}
        >
          <BounceLoader color="#c2410c" size={80} />
        </div>
      )}

      <div className="fixed z-50">
        <NavBar onScrollTo={scrollToSection} />
      </div>

      <div ref={homeRef}>
        <Home onScrollTo={scrollToSection} />
      </div>

      <AnimatedSection reference={aboutRef}>
        <AboutMe />
      </AnimatedSection>

      <AnimatedSection reference={servicesRef}>
        <Services />
      </AnimatedSection>

      <AnimatedSection reference={projectsRef}>
        <MyProjects />
      </AnimatedSection>

      <AnimatedSection reference={testimonialsRef}>
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection reference={contactRef}>
        <Contact />
      </AnimatedSection>

      <Footer onScrollTo={scrollToSection} />

      {activeSection !== "home" && (
        <FontAwesomeIcon
          onClick={() => scrollToSection("home")}
          className="fixed text-5xl z-50 bottom-0 right-0 md:mb-7 md:mr-10 mb-7 mr-5 dark:text-orange-700 cursor-pointer"
          icon={faCircleArrowUp}
        />
      )}
    </div>
  );
}

export default App;
