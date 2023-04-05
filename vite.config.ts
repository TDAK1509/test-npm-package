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
      include: ["src/components/**/*.ts"],
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
      entry: "src/components/main.ts",
      name: "UsergramUIComponents",
      formats: ["es", "cjs", "umd"],
      fileName: format => `usergram-ui-components-ts.${format}.js`,
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/components/main.ts"),
      },
      external: ["vue"],
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name === "main.css")
            return "usergram-ui-components-ts.css";
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
