const{test}=require('@playwright/test');
test("Tc",async({page})=>{
    await page.goto("https://demo.guru99.com/test/newtours/register.php");

    await page.locator("//input[@name='firstName']").fill("Sakshi");
    await page.locator("//input[@name='lastName']").fill("More");
    await page.locator("//input[@name='phone']").fill("465788");
    
    const [bugPage]=await Promise.all([
        page.context().waitForEvent('page'),
        page.getByAltText("JIRA Top ADS").click()

    ]);
    await bugPage.waitForLoadState();
    console.log("clicked on bug");

    await page.bringToFront();

    await Promise.all([
        page.context().waitForEvent('page'),
        page.getByAltText("Guru99 Demo Sites").click()

    ]);

    

        // await page.getByAltText("JIRA Top ADS").click();
        // await page.bringToFront();
        // await page.getByAltText("Guru99 Demo Sites").click();
        // await page.bringToFront();
        // await page.getByAltText("Demo Site").click();

    // await page.getByPlaceholder("lastName").fill("More");
    // await page.getByPlaceholder("phone").fill("666666666");
    // await page.getByRole('textbox',{name:'Email'}).fill("sakshi@gmail.com");
    // await page.getByRole('textbox',{name:'Address'}).fill("Pune");
    // await page.getByPlaceholder("city").fill("Kothrud");
    // await page.getByPlaceholder("state").fill("Maharashtra");
    // await page.getByPlaceholder("postalCode").fill("2345");
    // await page.getByPlaceholder('country').selectOption({hasText:'INDIA'});
    await page.waitForTimeout(3000);


})