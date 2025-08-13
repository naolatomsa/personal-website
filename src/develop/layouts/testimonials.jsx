import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../common/themeProvider";
import MyModal from "../common/dialog";

// Main App component
const Testimonials = () => {
  // State to manage the active testimonial index, derived from scroll position
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Ref for the scrollable carousel container

  // Array of testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Nebiyu Daniel",
      link: "https://www.linkedin.com/in/naol-atomsa-808770215/",
      title: "UI/UX Designer",
      image: "https://placehold.co/100x100/0A1B2D/FFFFFF?text=ND", // Placeholder image
      quote: `Naol A delivers exactly what you need from a dev partner when design precision matters. Having collaborated on multiple UX projects I can confirm his builds come out looking exactly like the mockups every time - even when initial specs aren't fully fleshed out. Asks the kind of questions that matter - you know where its clear he's thinking about both how it looks and how people actually use the thing<br><br>  
      What really stands out is how he navigates imperfect handoffs - manages to bridge gaps in documentation without missing a beat. Tight turnaround times too. You get zero drama execution that still maintains creative intent which honestly is rarer than it should be in this field.`,
    },

    // {
    //   id: 4,
    //   name: "Dr. Hundaol",
    //   link: "https://www.linkedin.com/in/naol-atomsa-808770215/",

    //   title: "Cyber Security Specialist",
    //   image: "https://placehold.co/100x100/0A1B2D/FFFFFF?text=Dr. Hunde",
    //   quote:
    //     "This service transformed our workflow. Highly recommend it for anyone looking to optimize their processes and boost productivity significantly.",
    // },
    // {
    //   id: 4,
    //   name: "Zewuudu Jemema",
    //   title: "Data Center Specialist",
    //   link: "https://www.linkedin.com/in/naol-atomsa-808770215/",
    //   image: "https://placehold.co/100x100/0A1B2D/FFFFFF?text=ZJ",
    //   quote:
    //     "Outstanding support and an intuitive platform. It's truly a game-changer for digital marketing strategies, providing measurable results.",
    // },
  ];

  // Effect to update activeIndex on scroll
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      // Get all testimonial elements
      const testimonialElements = Array.from(carousel.children);
      let closestIndex = 0;
      let minDistance = Infinity;

      // Calculate the center of the carousel's visible area
      const carouselCenter = carousel.scrollLeft + carousel.offsetWidth / 2;

      testimonialElements.forEach((element, index) => {
        // Calculate the center of the current testimonial element
        const elementCenter = element.offsetLeft + element.offsetWidth / 2;
        // Calculate the distance from the testimonial's center to the carousel's center
        const distance = Math.abs(carouselCenter - elementCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex(closestIndex);
    };

    // Use a debounced scroll listener to avoid too many updates
    let scrollTimeout;
    const debouncedHandleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100); // Adjust debounce time as needed
    };

    carousel.addEventListener("scroll", debouncedHandleScroll);
    // Initial call to set active index
    handleScroll();

    return () => {
      carousel.removeEventListener("scroll", debouncedHandleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [testimonials.length]); // Re-run if testimonials data changes

  // Function to handle dot clicks and scroll to the corresponding testimonial
  const handleDotClick = (index) => {
    setActiveIndex(index);
    if (carouselRef.current) {
      const targetElement = carouselRef.current.children[index];
      if (targetElement) {
        // Scroll to the element, aligning it to the center of the scroll container
        const scrollLeft =
          targetElement.offsetLeft -
          carouselRef.current.offsetWidth / 2 +
          targetElement.offsetWidth / 2;
        carouselRef.current.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    }
  };

  const { isDark } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [socialMedia, setSocialMedia] = useState("");
  const [pendingLink, setPendingLink] = useState("");

  const [name, setName] = useState("");

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  //linkedin

  const handleOnConfirm = () => {
    if (!isOpen) {
      return;
    }

    if (socialMedia === "Linkedin") {
      window.open(pendingLink, "_blank");
    }
  };
  const handleClientClick = (link, name) => {
    setIsOpen(true);
    setSocialMedia("Linkedin");
    setName(name);
    setPendingLink(link);
  };

  const maxWords = 40;

  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getTrimmedQuote = (quote) => {
    const words = quote.split(" ");
    return words.slice(0, maxWords).join(" ") + "...";
  };

  return (
    <div
      className={`h-full border-[1px]  ${
        isDark ? "border-gray-300" : "border-[#222222]"
      }  flex flex-col items-center md:py-10 py-5  font-sans ${
        isDark ? "text-black" : "text-white"
      }`}
    >
      {/* Testimonials Section Header */}
      <h1 className="dark:text-orange-700 mb-4 text-3xl libertinus-math-regular text-center font-bold">
        Testimonials
      </h1>
      <h1 className=" md:w-1/2 w-[90%] libertinus-math-regular text-[18px] text-center font-sans">
        I believe great work speaks for itself, but hearing from people I have
        worked with says even more. Here is what some of my clients and
        collaborators have said.
      </h1>

      {/* Testimonials Carousel Container */}
      <div
        ref={carouselRef}
        className="relative w-full flex items-center overflow-x-scroll scroll-smooth snap-x snap-mandatory  py-4 hide-scrollbar" // Added hide-scrollbar for aesthetics
      >
        {testimonials.map((testimonial, index) => {
          const isExpanded = expandedIds.includes(testimonial.id);
          const isLong = testimonial.quote.split(" ").length > maxWords;
          return (
            <div
              key={testimonial.id}
              // Use flex-none for fixed width, and responsive widths for visibility of adjacent cards
              // On small screens (sm), full width, on medium (md), half width, on large (lg), third width.
              className={`flex-none w-[90%] h-full  md:w-1/2 p-4 snap-center transition-all duration-300 ease-in-out
            ${
              activeIndex === index
                ? "opacity-100 scale-105"
                : "opacity-50 scale-95"
            }`}
            >
              <div
                className={`rounded-xl bg-[#7C7C7C1F] bg-opacity-50  flex md:flex-row flex-col md:gap-10 items-center text-center p-5 md:p-10 h-full justify-between 
                `}
              >
                {/* Testimonial Image */}
                <div className="flex-shrink-0 ">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 dark:border-orange-700 shadow-md"
                    // Fallback for image loading errors
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/100x100/0A1B2D/FFFFFF?text=Error";
                    }}
                  />
                </div>

                {/* Testimonial Content */}
                <div className="flex-grow">
                  <p className="libertinus-math-regular text-[14px] flex flex-col  leading-relaxed  ">
                    <span className="dark:text-orange-700  place-self-start text-3xl font-extrabold mr-2 ">
                      “
                    </span>
                    <div>
                      <span
                        dangerouslySetInnerHTML={{
                          __html:
                            isExpanded || !isLong
                              ? testimonial.quote
                              : getTrimmedQuote(testimonial.quote),
                        }}
                      />
                      {isLong && (
                        <button
                          onClick={() => toggleExpand(testimonial.id)}
                          className="ml-2 cursor-pointer text-blue-600 hover:underline"
                        >
                          {isExpanded ? "See less" : "See more"}
                        </button>
                      )}
                    </div>
                    <span className="dark:text-orange-700 text-3xl place-self-end font-extrabold">
                      “
                    </span>
                  </p>
                  {/* <span className="text-blue-500 text-3xl font-extrabold ml-2">
                  ”
                </span> */}
                </div>
                {/* Testimonial Author */}
                <button
                  className="w-full cursor-pointer"
                  onClick={() =>
                    handleClientClick(testimonial.link, testimonial.name)
                  }
                >
                  <p className="font-bold dark:text-orange-700 text-lg libertinus-math-regular">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 libertinus-math-regular">
                    {testimonial.title}
                  </p>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden">
        <MyModal
          isOpen={isOpen}
          name={name}
          socialMedia={socialMedia}
          onConfirm={() => handleOnConfirm()}
          close={close}
        />
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* Navigation Dots */}
      <div className="flex justify-center md:mt-8 mt-3 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeIndex === index
                ? "dark:bg-orange-700 w-8"
                : isDark
                ? "bg-[#0A1B2D] bg-opacity-50 "
                : "bg-[#0A1B2D] bg-opacity-50 "
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
