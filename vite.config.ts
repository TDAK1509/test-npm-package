import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import typescript2 from "rollup-plugin-typescript2";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          outDir: "dist",
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ["vite.config.ts"],
    }),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: "src/main.ts",
      name: "bebitGlobalVueComponents",
      formats: ["es", "cjs", "umd"],
      fileName: format => `global-vue-components-ts.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/main.ts"),
      },
      external: ["vue"],
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name === "main.css")
            return "global-vue-components-ts.css";
          return assetInfo.name;
        },
        exports: "named",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
