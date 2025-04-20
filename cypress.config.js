const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.thelightninggroup.co.uk/',
    specPattern: 'cypress/integration/**/*.js',
    setupNodeEvents(on, config) {
      
    },
  },
});
