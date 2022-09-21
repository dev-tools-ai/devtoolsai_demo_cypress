const { defineConfig } = require("cypress");
const { registerSmartDriverTasks } = require('@devtools-ai/cypress-sdk/dist/plugins');

module.exports = defineConfig({
  retries: 1,
  e2e: {
    setupNodeEvents(on, config) {
      registerSmartDriverTasks(on, config);
      return config;
      // implement node event listeners here
    },
    env: {
      interactiveMode: true,
    },
  },
  chromeWebSecurity: false,
});
