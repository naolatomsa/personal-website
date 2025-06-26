import React, { useState, useRef, useEffect } from "react";

// Main App component
const Testimonials = () => {
  // State to manage the active testimonial index, derived from scroll position
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Ref for the scrollable carousel container

  // Array of testimonial data
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO",
      image: "https://placehold.co/100x100/0A1B2D/FFFFFF?text=JD", // Placeholder image
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique amet sed massa nibh lectus netus in, aliquet donec morbi convallis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique amet sed massa nibh lectus netus in, aliquet donec morbi convallis pretium",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Designer",
      image: "https://placehold.co/100x100/0A1B2D/FFFFFF?text=JS", // Placeholder image
      quote:
        "In enim cursus odio accumsan, id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    },
    {
      id: 3,
      name: "Peter Jones",
      title: "Developer",
      image: "https://placehold.co/100x100/0A1B2D/FFFFFF?text=PJ", // Placeholder image
      quote:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget.",
    },
    {
      id: 4,
      name: "Alice Johnson",
      title: "Product Manager",
      image: "https://placehold.co/100x100/0A1B2D/FFFFFF?text=AJ",
      quote:
        "This service transformed our workflow. Highly recommend it for anyone looking to optimize their processes and boost productivity significantly.",
    },
    {
      id: 5,
      name: "Bob Williams",
      title: "Marketing Specialist",
      image: "https://placehold.co/100x100/0A1B2D/FFFFFF?text=BW",
      quote:
        "Outstanding support and an intuitive platform. It's truly a game-changer for digital marketing strategies, providing measurable results.",
    },
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

  return (
    <div className="min-h-screen  text-white flex flex-col items-center md:py-10 py-5  font-sans">
      {/* Testimonials Section Header */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        Testimonials
      </h1>
      <p className="text-lg sm:text-xl text-gray-400 mb-12 text-center max-w-2xl">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in, aliquet donec morbi convallis pretium
      </p>

      {/* Testimonials Carousel Container */}
      <div
        ref={carouselRef}
        className="relative w-full  overflow-x-scroll scroll-smooth snap-x snap-mandatory flex py-4 hide-scrollbar" // Added hide-scrollbar for aesthetics
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            // Use flex-none for fixed width, and responsive widths for visibility of adjacent cards
            // On small screens (sm), full width, on medium (md), half width, on large (lg), third width.
            className={`flex-none w-[90%] md:w-1/2 p-4 snap-center transition-all duration-300 ease-in-out
            ${
              activeIndex === index
                ? "opacity-100 scale-105"
                : "opacity-50 scale-95"
            }`}
          >
            <div className="bg-gray-800 rounded-3xl  flex md:flex-row flex-col gap-10 items-center text-center p-5 md:p-10 h-full justify-between">
              {/* Testimonial Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 dark:border-orange-700 shadow-md"
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
                <p className="text-[14px] flex flex-col  leading-relaxed  text-white">
                  <span className="dark:text-orange-700 place-self-start text-3xl font-extrabold mr-2">
                    “
                  </span>
                  {testimonial.quote}
                  <span className="dark:text-orange-700 text-3xl place-self-end font-extrabold">
                    “
                  </span>
                </p>
                {/* <span className="text-blue-500 text-3xl font-extrabold ml-2">
                  ”
                </span> */}
              </div>
              {/* Testimonial Author */}
              <div className="w-full">
                <p className="font-bold dark:text-orange-700 text-lg">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
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
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              activeIndex === index ? "dark:bg-orange-700 w-8" : "bg-gray-600"
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
