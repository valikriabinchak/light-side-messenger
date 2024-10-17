const { defineConfig } = require("cypress");
// const { startDevServer } = require('@cypress/webpack-dev-server');
const webpackConfig = require("./config/webpack.config");

module.exports = defineConfig({
  projectId: "hyqzum",

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      webpackConfig,
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
