describe('WDW Production Site', function(){

    it('home page url validation', function(){
        await browser.get("https://disneyworld.disney.go.com/");
        await expect(browser.getCurrentUrl()).toContain("disneyworld");
        await expect(browser.getCurrentUrl()).toEqual("https://disneyworld.disney.go.com/");
    });

    it('inputs check-in and check-out', function(){
        await element(by.id("checkInDate_display")).clear();
        await element(by.id("checkInDate_display")).sendKeys("11/20/2020");
        await element(by.id("checkOutDate_display")).clear();
        await element(by.id("checkOutDate_display")).sendKeys("11/25/2020");
    })

    it('clicks places to stay and validates url change to resort', function(){
        await browser.waitForAngularEnabled(false);  
        await element(by.css("[wdpr-pillbutton-v2]")).click();
        await expect(browser.getCurrentUrl()).toContain("/resorts/");
    })
});