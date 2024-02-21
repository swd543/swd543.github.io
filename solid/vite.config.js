import { defineConfig } from 'vite';
import wasm from "vite-plugin-wasm";
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    wasm(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'esnext',
    watch: true,
    cssMinify: true,
    minify: true
  },
  preview:{
    port: 3000,
    open: true,
  }
});
