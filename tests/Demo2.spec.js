// //----------browser context-----------
// const {test,chromium}=require('@playwright/test');
// test("test",async()=>{
// const browser=await chromium.launch({headles:false});
// const browserContext=await browser.newContext();

// const page1=await browserContext.newPage();
// await page1.goto("https://www.facebook.com/login/");

// const page2=await browserContext.newPage();
// await page2.goto("https://www.google.com/");

// //capture url
// console.log(await page1.url());
// console.log(await page2.url());

// await page2.goBack();
// await page1.waitForTimeout(3000);
//});




const{test,chromium}=require('@playwright/test');
test("tc",async()=>{
const browser=await chromium.launch({headless:false});
const context=await browser.newContext();

const page1=await context.newPage();
await page1.goto("https://www.google.com/");

const page2=await context.newPage();
await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page1.waitForTimeout(4000);



})