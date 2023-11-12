const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

const browserify = require('@cypress/browserify-preprocessor');
const resolve = require('resolve');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
      };
    
      on('file:preprocessor', cucumber(options));
    },
    specPattern: "cypress/e2e/*.feature",
  },
});
