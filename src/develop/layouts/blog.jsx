import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../common/themeProvider";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import Pagination from "../common/pagination";
import blog from "../data/blog.json";
import { useNavigate } from "react-router-dom";

const Blog = () => {
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
    <div
      className={`mx-auto border-[1px]  ${
        isDark ? "border-gray-300" : "border-[#222222]"
      } md:h-full md:py-10 md:w-3/4 w-[90%] py-5  h-full flex gap-10 flex-col items-center ${
        isDark ? "text-black" : "text-white"
      }`}
    >
      <div>
        <h1 className="dark:text-orange-700  text-3xl libertinus-math-regular text-center font-bold">
          Blog
        </h1>
      </div>
      <div className="md:grid flex-col md:w-3/4 w-[90%] grid justify-center gap-10 items-center">
        {currentPageData &&
          currentPageData.map((blog) => (
            <div
              key={blog.id}
              className={`md:w-full bg-[#7C7C7C1F] bg-opacity-50 rounded-xl grid gap-5  p-5`}
            >
              <div>
                <h1 className="md:text-[22px] text-md libertinus-math-regular-blog-title  font-bold">
                  {blog.title}
                </h1>
                <p
                  className={`text-xs ${
                    isDark ? "text-black/50" : "text-white/50"
                  }`}
                >
                  {blog.date}
                </p>
              </div>
              <div>
                <p className={`libertinus-math-regular-blog text-[15px]`}>
                  {blog.content}
                </p>
                <a
                  className={`text-xs underline cursor-pointer ${
                    isDark ? "text-blue-500" : "text-blue-500"
                  }`}
                  onClick={() =>
                    navigate("/personal-website/details", { state: blog })
                  }
                >
                  Read more. . .
                </a>
              </div>
              <div className="flex justify-end">
                <div>
                  <h1 className="md:text-[16px] text-md libertinus-math-regular-blog-title  font-bold">
                    {blog.name}
                  </h1>
                  <p
                    className={`text-[12px] ${
                      isDark ? "text-black/50" : "text-white/50"
                    }`}
                  >
                    {blog.profession}
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
  );
};

export default Blog;
