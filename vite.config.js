import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/personal-website",
  server: {
    // host: "192.168.43.18",
    // host: "192.168.8.154",
    // host:'192.168.8.106',
    // port: 3000,
    // open: true,
  },
});
