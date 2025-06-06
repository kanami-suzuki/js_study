import {
  defineConfig
} from "vite";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist", //プロジェクトルートからの相対パス(index.pugからの相対パス)
    emptyOutDir: true,
    rollupOptions: {
      input: "src/index.html",
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
            return 'assets/images/[name].[ext]';
          }
          if (/\.css$/.test(assetInfo.name)) {
            return 'assets/css/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        }
      }
    }
  }
})