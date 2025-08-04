import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { preview } from "vite";

export default function (eleventyConfig) {
  eleventyConfig.on("afterBuild", () => {
    const blogPosts = [];
    // const newsPosts = [];
    // const jobPosts = [];
    const allTags = new Set();
    // const allJobTags = new Set();
    const tagFrequency = {};
    const postsPath = "./11tyBlog/posts/";
    const blogJsonPath = "./11tyDist/blog.json";

    // Load existing blog.json to preserve old dates
    let existingPosts = [];
    if (fs.existsSync(blogJsonPath)) {
      existingPosts = JSON.parse(fs.readFileSync(blogJsonPath, "utf-8"));
    }
    // Read all blog posts
    fs.readdirSync(postsPath).forEach((file) => {
      if (file.endsWith(".md")) {
        const filePath = path.join(postsPath, file);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContents);
        const slug = path.basename(file, ".md");

        const existingPost = existingPosts.find((post) => post.slug === slug);

        let preview =
          content
            .split("\n")
            .filter(
              (line) =>
                !line.startsWith("#") &&
                !line.startsWith("<br>") &&
                !line.startsWith("```") &&
                line.trim() !== ""
            )
            .join(" ")
            .split(" ")
            .slice(0, 20)
            .join(" ") + "...";

        const tags = data.tags || [];
        tags.forEach((tag) => {
          allTags.add(tag);
          tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
        });

        // const jobTags = data.jobTags || [];
        // jobTags.forEach((tag) => {
        //   allJobTags.add(tag);
        //   // tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
        // });

        blogPosts.push({
          slug,
          url: `/posts/${slug}/`,
          title: data.title || "Untitled Post",
          author: data.author || "Unknown Author",
          categories: data.categories || "unknown category",
          date:
            data.date ||
            (existingPost ? existingPost.date : new Date().toISOString()),
          tags: tags,
          expertise: data.expertise || "Not specified",
          preview: preview,
          markdown: content,
        });
      }
    });

    blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // newsPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // jobPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    blogPosts.forEach((post) => {
      post.relatedPosts = blogPosts
        .filter(
          (otherPost) =>
            otherPost.slug !== post.slug &&
            otherPost.tags.some((tag) => post.tags.includes(tag))
        )
        .slice(0, 3)
        .map((relatedPost) => ({
          preview: relatedPost.preview,
          slug: relatedPost.slug,
          url: relatedPost.url,
          title: relatedPost.title,
          tags: relatedPost.tags,
        }));

      if (!post.relatedPosts) {
        post.relatedPosts = [];
      }
    });

    const topThree = Object.entries(tagFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([tag]) => tag);

    //  Save to files
    // fs.writeFileSync("./11tyDist/job.json", JSON.stringify(jobPosts, null, 2));
    // fs.writeFileSync(
    //   "./11tyDist/allJobTags.json",
    //   JSON.stringify([...allJobTags], null, 2)
    // );
    fs.writeFileSync(
      "./11tyDist/blog.json",
      JSON.stringify(blogPosts, null, 2)
    );
    // fs.writeFileSync(
    //   "./11tyDist/news.json",
    //   JSON.stringify(newsPosts, null, 2)
    // );
    fs.writeFileSync(
      "./11tyDist/tags.json",
      JSON.stringify([...allTags], null, 2)
    );
    fs.writeFileSync(
      "./11tyDist/topThree.json",
      JSON.stringify(topThree, null, 2)
    );
  });

  return {
    dir: {
      input: "11tyBlog",
      output: "11tyDist",
    },
  };
}
