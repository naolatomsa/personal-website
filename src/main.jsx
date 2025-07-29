import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./develop/common/themeProvider.jsx";
import BlogContent from "./develop/layouts/blogContent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/personal-website" element={<App />} />
          <Route path="personal-website/details" element={<BlogContent />} />
          {/* add more routes here as needed */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
