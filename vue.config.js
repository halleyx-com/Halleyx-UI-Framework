const { defineConfig } = require("@vue/cli-service");
const fs = require("fs");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "./assets"),
      },
    },
  },
  devServer: {},
  css: {
    loaderOptions: {
      sass: {
        // $COLOR: ${process.env.VUE_APP_COLOR};
        additionalData: `
        $dev: ${true};
      `,
      },
    },
  },
  publicPath: "/",
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "Halleyx UI Kit | Design with ease",
    },
  },
});
