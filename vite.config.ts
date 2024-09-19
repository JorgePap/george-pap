import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/george-pap/",
  resolve: {
    alias: {
      "@domain": path.resolve(__dirname, "src/domain/index.ts"),
      "@router": path.resolve(__dirname, "src/router/index.ts"),
      "@ui": path.resolve(__dirname, "src/ui/index.ts"),
      "@translations": path.resolve(__dirname, "src/translations/index.ts"),
    },
  },
});
