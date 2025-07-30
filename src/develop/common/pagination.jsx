import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";
import { useTheme } from "./themeProvider";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const { isDark } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center">
      <nav
        className="flex flex-wrap justify-center items-center gap-6 py-5"
        aria-label="Pagination"
      >
        {/* Previous Button */}
        <button
          type="button"
          className={`rotate-180 px-3 py-2 rounded-md flex items-center gap-2 normal-case shadow-none ${
            currentPage === 1
              ? "cursor-not-allowed opacity-40 bg-transparent"
              : "hover:cursor-pointer  bg-transparent"
          }`}
          aria-label="Previous"
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
        >
          <h1 className="-rotate-180 text-xs font-bold">Previous</h1>
          <FontAwesomeIcon className="" icon={faChevronCircleRight} />
          <span className="sr-only">Previous</span>
        </button>

        {/* Only Current Page */}
        <h1
          className={` bg-transparent border ${
            isDark ? "border-gray-400" : "border-[#2C2C2C]  "
          } w-10 h-10  flex items-center justify-center rounded-full text-xl libertinus-math-regular text-center font-bold`}
        >
          {currentPage}
        </h1>

        {/* Next Button */}
        <button
          type="button"
          className={`rotate-180 px-3 py-2 rounded-md flex items-center gap-2 normal-case shadow-none ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-40 bg-transparent"
              : "hover:cursor-pointer  bg-transparent"
          }`}
          aria-label="Next"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          <h1 className="-rotate-180 text-xs font-bold">Next</h1>
          <FontAwesomeIcon className="" icon={faChevronCircleLeft} />
          <span className="sr-only">Next</span>
        </button>
      </nav>
      <div className="text-xs">
        Page {currentPage} out of {totalPages}
      </div>
    </div>
  );
};

export default Pagination;
