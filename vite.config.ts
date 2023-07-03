import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

const root = process.cwd();

function pathResolve(dir: string) {
  return resolve(root, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve(__dirname, "src/locales/**")],
    }),
  ],
  resolve: {
    extensions: [
      ".mjs",
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
      ".less",
      ".css",
    ],
    alias: [
      {
        find: "vue-i18n",
        replacement: "vue-i18n/dist/vue-i18n.cjs.js",
      },
      {
        find: /\@\//,
        replacement: `${pathResolve("src")}/`,
      },
    ],
  },
  optimizeDeps: {
    include: [
      "vue",
      "vue-router",
      "vue-types",
      "@iconify/iconify",
      "@vueuse/core",
      "axios",
    ],
  },
});
