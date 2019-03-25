var config = {
  selenium : {  
    host: process.env.AUTOMATION_SELENIUM_HOST || '127.0.0.1',
    port: process.env.AUTOMATION_SELENIUM_PORT || '4444',
  },

  globals : {
    url: process.env.GOOGLE_URL || 'https://www.google.com.uy/',
    
  },

 }

module.exports = config;
