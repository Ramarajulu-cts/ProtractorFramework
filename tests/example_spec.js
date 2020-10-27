let homepage = require('../pages/disneyworld.js')

describe('WDW Site', function(){

  it('Navigates to Home Page - Validates URL and text', function(){
    homepage.get();
    homepage.verifyURL();
    });

  it('Provides Checkin and Checkout dates', function(){
    homepage.enterCheckinDate();
    homepage.enterCheckOutDate();
  })

  it('Clicks view rates and url navigates to resort page', function() { 
    browser.waitForAngularEnabled(false);  
    homepage.goToResorts();
    homepage.verifyURLChangeToResort();
  })
});