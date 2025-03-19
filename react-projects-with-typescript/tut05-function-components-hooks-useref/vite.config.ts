import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-projects/react-projects-with-typescript/tut05-function-components-hooks-useref/",
});
