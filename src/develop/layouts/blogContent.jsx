// BlogFullContent.jsx
import React, { useEffect, useMemo, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkBreaks from "remark-breaks";
import "highlight.js/styles/github-dark.css";
import ScrollProgressBar from "../common/progressBar";
import { useTheme } from "../common/themeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCompress,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";

function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

const BlogFullContent = ({
  // When rendering inline, you can pass the blog object directly:
  blog, // { slug, title, author, date, categories, markdown, tags, relatedPosts }
  isFullscreen = false,
  onToggleFullscreen, // () => void
  onBack, // () => void (to go back to the list)
  // If you don't pass blog, component will use slug param and fetch (route mode)
}) => {
  const params = useParams();
  const slugFromRoute = params?.slug;
  const usingRoute = !blog && !!slugFromRoute;

  const [postContent, setPostContent] = useState(""); // (kept if you need HTML index.html)
  const [postMarkdown, setPostMarkdown] = useState(blog?.markdown ?? "");
  const [postMetadata, setPostMetadata] = useState(blog ?? null);
  const [loading, setLoading] = useState(usingRoute);
  const [error, setError] = useState(null);

  // Fullscreen: lock body scroll + ESC to exit
  useBodyScrollLock(isFullscreen);
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape" && isFullscreen && onToggleFullscreen) {
        onToggleFullscreen();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isFullscreen, onToggleFullscreen]);

  // Route mode fetch (your original logic preserved)
  useEffect(() => {
    if (!usingRoute) return;
    let isMounted = true;
    const slug = slugFromRoute;

    setLoading(true);
    setError(null);

    // 1) Fetch metadata/markdown
    fetch("../../../dist/blog.json")
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        const post = data.find((p) => p.slug === slug);
        if (post) {
          setPostMetadata(post);
          setPostMarkdown(post.markdown);
        } else {
          setError("Post not found in blog.json");
        }
      })
      .catch((err) => {
        if (isMounted) setError(`Error fetching metadata: ${err.message}`);
      });

    // 2) (Optional) Fetch compiled HTML (if you still want it)
    fetch(`../../../dist/posts/${slug}/index.html`)
      .then((res) => {
        if (!res.ok) throw new Error(`Post not found: ${res.status}`);
        return res.text();
      })
      .then((html) => {
        if (isMounted) {
          setPostContent(html);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          // Don’t fail the whole page if HTML is missing—we still have markdown
          setPostContent("");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [usingRoute, slugFromRoute]);

  if (loading) return <p className="text-white p-10">Loading...</p>;
  if (error) return <p className="text-red-500 p-10">{error}</p>;

  const convertDateFormat = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  const date = postMetadata?.date ? convertDateFormat(postMetadata.date) : "";
  const { isDark } = useTheme();
  const boxRef = useRef(null);

  // Container: inline card vs fullscreen overlay
  const Container = ({ children }) =>
    isFullscreen ? (
      <div
        className={`fixed libertinus-math-regular inset-0 z-[60] bg-[#121212] backdrop-blur-sm  ${
          isDark
            ? "bg-[#e5e7eb] darker text-black "
            : "bg-[#121212] dark text-white"
        }`}
      >
        <div className="h-full w-full flex items-center justify-center md:p-4 p-2">
          <div
            ref={boxRef}
            className={`h-full border border-orange-700 md:max-h-[95vh] max-h-[89vh] w-full max-w-4xl overflow-y-auto rounded-md    
              ${
                isDark
                  ? "bg-[#e5e7eb]  text-black "
                  : "bg-[#121212]  text-white"
              }`}
          >
            <div className="">
              <ScrollProgressBar containerRef={boxRef} />
            </div>
            <div
              className={`sticky top-0 md:px-10 px-5 py-5  flex items-center justify-between  ${
                isDark
                  ? "bg-[#e5e7eb]  text-black "
                  : "bg-[#121212]  text-white"
              }`}
            >
              {onBack && (
                <button
                  type="button"
                  className="text-xs text-orange-700 cursor-pointer"
                  onClick={onBack}
                >
                  <FontAwesomeIcon icon={faCircleChevronLeft} size="2xl" />
                </button>
              )}
              {onToggleFullscreen && (
                <button
                  type="button"
                  className="text-xs text-orange-700 cursor-zoom-out"
                  onClick={onToggleFullscreen}
                >
                  <FontAwesomeIcon size="2xl" icon={faCompress} />
                </button>
              )}
            </div>
            <div className="md:p-6 p-2"> {children}</div>
          </div>
        </div>
      </div>
    ) : (
      <section
        className={`relative border libertinus-math-regular  border-orange-700  h-screen  overflow-y-auto md:w-[60vw] w-[90vw] max-w-5xl md:mx-auto rounded-md ${
          isDark ? "bg-[#e5e7eb]  text-black " : "bg-[#121212]  text-white"
        }`}
      >
        <div
          className={`sticky top-0 md:px-10 px-5 py-5  flex items-center justify-between  ${
            isDark ? "bg-[#e5e7eb]  text-black " : "bg-[#121212]  text-white"
          }`}
        >
          {onBack && (
            <button
              type="button"
              className="text-xs  text-orange-700 cursor-pointer"
              onClick={onBack}
            >
              <FontAwesomeIcon icon={faCircleChevronLeft} size="2xl" />
            </button>
          )}
          {onToggleFullscreen && (
            <button
              type="button"
              className="text-xs text-orange-700 cursor-zoom-in"
              onClick={onToggleFullscreen}
            >
              <FontAwesomeIcon size="2xl" icon={faExpand} />
            </button>
          )}
        </div>
        <div className="p-6">{children}</div>
      </section>
    );

  const tags = postMetadata?.tags ?? [];
  const related = postMetadata?.relatedPosts ?? [];

  return (
    <div ref={boxRef} className="text-white h-full relative">
      <ScrollProgressBar containerRef={boxRef} />
      {/* Background (kept, but avoid covering overlay) */}
      {!isFullscreen && <div className="absolute " />}

      {/* Put it once at the root so it’s always visible */}
      <div className="relative   grid gap-5 items-center  overflow-y-auto md:px-20 px-5 ">
        <Container className="">
          {/* Header / controls */}
          <div className="flex flex-col bg-[#7C7C7C1F] rounded-md py-5 md:px-5 px-3  gap-4 mb-4">
            <div className="">
              <h1 className="libertinus-math-regular-blog-title md:text-3xl text-2xl">
                {postMetadata?.title || "Loading..."}
              </h1>
              <div className="py-2 flex items-center gap-1">
                <span className="text-xs font-normal">{date}</span>
              </div>
              <div
                className={` text-center p-2 rounded-md ${
                  isDark ? "bg-gray-200" : "bg-[#121212]"
                }`}
              >
                <span className="text-xs rounded-md">
                  {postMetadata?.categories || "Category"}
                </span>
              </div>
            </div>
            <div className=" flex items-center gap-1">
              <span className="text-lg font-bold">Author:-</span>
              <span className="text-lg font-bold">
                {postMetadata?.author || "—"}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="prose  prose-invert max-w-none overflow-auto">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkBreaks]}
              rehypePlugins={[rehypeRaw, rehypeHighlight]}
              components={{
                p: ({ children }) => (
                  <p className="text-md mt-4 mb-4 whitespace-pre-wrap">
                    {children}
                  </p>
                ),
                br: () => <br className="mb-2" />,
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold mt-6 mb-4">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-semibold mt-5 mb-3">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-medium mt-4 mb-2">{children}</h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-xl font-normal mt-3 mb-2">{children}</h4>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold">{children}</strong>
                ),
                em: ({ children }) => <em className="italic">{children}</em>,
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside ml-5 space-y-2">
                    {children}
                  </ol>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc ml-5 space-y-2">{children}</ul>
                ),
                li: ({ children }) => <li className="ml-2">{children}</li>,
              }}
            >
              {postMarkdown}
            </ReactMarkdown>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BlogFullContent;
