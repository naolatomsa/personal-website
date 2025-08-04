import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faCode,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../common/themeProvider";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import Pagination from "../common/pagination";
// import blog from "../data/blog.json";
import { useNavigate } from "react-router-dom";
import blog from "../../../11tyDist/blog.json";

const Blog = ({ onOpen }) => {
  const { isDark } = useTheme();
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [trendingPost, setTrendingPost] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(blog.length / itemsPerPage));
  }, [blog, itemsPerPage]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageData = blog.slice(indexOfFirstItem, indexOfLastItem);
  // console.log(currentPage);

  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {blog.length !== 0 ? (
        <div
          className={`mx-auto border-[1px]  ${
            isDark ? "border-gray-300" : "border-[#222222]"
          } md:h-full md:py-10 md:w-3/4 w-[100%] py-5  h-full flex gap-10 flex-col items-center ${
            isDark ? "text-black" : "text-white"
          }`}
        >
          <div>
            <h1 className="dark:text-orange-700  text-3xl libertinus-math-regular text-center font-bold">
              Blog
            </h1>
          </div>
          <div className="md:grid flex-col md:w-[75vw] w-[90%] grid justify-center gap-10 items-center">
            {currentPageData &&
              currentPageData.map((blog) => (
                <div
                  key={blog.slug}
                  className={`md:w-[60vw] bg-[#7C7C7C1F] bg-opacity-50 rounded-xl grid gap-5  p-5`}
                >
                  <div>
                    <h1 className="md:text-[22px] text-2xl libertinus-math-regular-blog-title  font-bold">
                      {blog.title}
                    </h1>
                    <p
                      className={`text-xs ${
                        isDark ? "text-black/50" : "text-white/50"
                      }`}
                    >
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className={`libertinus-math-regular-blog text-[15px]`}>
                      {blog.preview}
                    </p>
                    <button
                      type="button"
                      onClick={() => onOpen(blog)}
                      className="text-xs underline cursor-pointer text-blue-500"
                    >
                      Read more...
                    </button>
                  </div>
                  <div className="md:flex  justify-between grid gap-5">
                    <div className="md:hidden flex-col flex  w-full">
                      <h1 className="md:text-[16px] text-md libertinus-math-regular-blog-title  font-bold">
                        {blog.author}
                      </h1>
                      <p
                        className={`text-[12px] ${
                          isDark ? "text-black/50" : "text-white/50"
                        }`}
                      >
                        {blog.expertise}
                      </p>
                    </div>

                    <div
                      className={`flex flex-wrap md:gap-5 gap-3  rounded-md  bg-[#7C7C7C1F]
                   ${
                     blog?.tags?.length
                       ? isDark
                         ? "bg-white/50"
                         : "bg-black/50"
                       : "bg-transparent"
                   }  `}
                    >
                      {blog.tags.map((tag, index) => (
                        <h1
                          key={index}
                          className={`   flex items-center justify-center  text-xs p-2 libertinus-math-regular text-center font-bold`}
                        >
                          {tag}
                        </h1>
                      ))}
                    </div>

                    <div className="md:flex flex-col hidden">
                      <h1 className="md:text-[16px] md:w-40 text-md libertinus-math-regular-blog-title  font-bold">
                        {blog.author}
                      </h1>
                      <p
                        className={`text-[12px] ${
                          isDark ? "text-black/50" : "text-white/50"
                        }`}
                      >
                        {blog.expertise}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      ) : (
        <div
          className={`mx-auto md:w-1/2 w-full md:h-[70vh] h-[85vh] border flex justify-center items-center ${
            isDark ? "border-gray-300" : "border-[#222222]"
          }`}
        >
          <div className="border border-orange-700 w-1/2 mx-auto h-0 flex justify-center items-center dark:text-orange-700  text-3xl libertinus-math-regular text-center font-bold">
            NO BLOG
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
