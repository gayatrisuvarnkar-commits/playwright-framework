const {test,chromium}=require('@playwright/test');
test("Tc",async()=>{
const browser=await chromium.launch({headless:false});
const page=await browser.newPage();
await page.goto("https://www.google.com/");
const a1=await page.title();
console.log(a1);

const a2=await page.url();
console.log(a2);

await page.goForward();

await page.goto("https://www.facebook.com/login/");
await page.goBack();

await page.waitForTimeout(3000);



})