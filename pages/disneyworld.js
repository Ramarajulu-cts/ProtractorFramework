
var disneyworld = function(){

    let inputCheckin = element(by.id("checkInDate_display"));
    let inputCheckout = element(by.id("checkOutDate_display"));
    let clkViewRates = element(by.css("[wdpr-pillbutton-v2]"));

    this.get = function(){
        browser.get("https://disneyworld.disney.go.com/");
        browser.driver.manage().window().maximize();
    }

    this.enterCheckinDate = function(){
        inputCheckin.sendKeys('11/20/2020');
    }

    this.enterCheckOutDate = function(chkOutDate){
        inputCheckout.sendKeys('11/25/2020');
    }

    this.goToResorts = function(){
        clkViewRates.click();
    }

    this.verifyURL = function(){
        expect(browser.getCurrentUrl()).toContain('disneyworld');
        expect(browser.getCurrentUrl()).toEqual('https://disneyworld.disney.go.com/');
    }

    this.verifyURLChangeToResort = function(text){
        expect(browser.getCurrentUrl()).toContain('oooooo');
    }

}

module.exports = new disneyworld()