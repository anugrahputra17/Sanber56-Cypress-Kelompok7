const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento.softwaretestingboard.com/',
    defaultCommandTimeout: 10000, // 10 detik untuk perintah default
    pageLoadTimeout: 60000, // 60 detik untuk memuat halaman  
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
