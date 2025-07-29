import React from "react";
import { useTheme } from "../common/themeProvider";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MouseGlow from "../common/mouseGlow";
import CustomCursor from "../common/customCursor";

const BlogContent = () => {
  const location = useLocation();
  const blog = location.state;

  if (!blog) {
    return <p>No blog data found.</p>;
  }
  const { isDark } = useTheme();
  const navigate = useNavigate();

  return (
    <div
      className={`mx-auto border-[1px]  ${
        isDark ? "border-gray-300" : "border-[#222222]"
      } md:h-full md:py-10 md:w-3/4 w-[90%] py-5  h-full flex gap-10 flex-col items-center ${
        isDark ? "text-black" : "text-white"
      }`}
    >
      <MouseGlow isDark={isDark} />
      <CustomCursor />
      <button className="jus" onClick={() => navigate(-1)}>back</button>
      <div>{blog.content}</div>
    </div>
  );
};

export default BlogContent;
