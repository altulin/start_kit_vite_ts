// vite.config.ts
import { defineConfig } from "file:///C:/Users/altul/it/templates/start_kit_vite_ts/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/altul/it/templates/start_kit_vite_ts/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/altul/it/templates/start_kit_vite_ts/node_modules/vite-plugin-svgr/dist/index.js";
import autoprefixer from "file:///C:/Users/altul/it/templates/start_kit_vite_ts/node_modules/autoprefixer/lib/autoprefixer.js";
var vite_config_default = defineConfig({
  plugins: [react(), svgr()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
        // add options if needed
      ]
    }
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhbHR1bFxcXFxpdFxcXFx0ZW1wbGF0ZXNcXFxcc3RhcnRfa2l0X3ZpdGVfdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGFsdHVsXFxcXGl0XFxcXHRlbXBsYXRlc1xcXFxzdGFydF9raXRfdml0ZV90c1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYWx0dWwvaXQvdGVtcGxhdGVzL3N0YXJ0X2tpdF92aXRlX3RzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBzdmdyIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCI7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBzdmdyKCldLFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIGF1dG9wcmVmaXhlcih7fSksIC8vIGFkZCBvcHRpb25zIGlmIG5lZWRlZFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBcIi9zcmNcIixcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFVLFNBQVMsb0JBQW9CO0FBQ2xXLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsT0FBTyxrQkFBa0I7QUFHekIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFBQSxFQUN6QixLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUCxhQUFhLENBQUMsQ0FBQztBQUFBO0FBQUEsTUFDakI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
