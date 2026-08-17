const {test,chromium}=require('@playwright/test');
test("Tc",async()=>{
const browser=await chromium.launch({headless:false});
const page=await browser.newPage();
await page.goto("https://demoqa.com/automation-practice-form");
await page.getByPlaceholder("First Name").fill("Gayatri");
await page.getByRole('textbox',{name:'Last Name'}).fill("Dixit");
console.log("LAst name Done");

await page.locator("//input[@id='userEmail']").fill("gayatri@gmail.com");
console.log("gmail Done");

await page.getByLabel("Female").click();
console.log("gender Done");
await page.getByPlaceholder("Mobile Number").fill("3546477");
console.log("Mo no done");

await page.locator("//input[@id='dateOfBirthInput']").fill("25 Dec 2000");
console.log("DOB done");

await page.locator("//input[@id='subjectsInput']").fill("MAths");
console.log("subject done");
await page.keyboard.press("Enter");

await page.getByRole('checkbox', {name : 'Music'}).click();
// console.log("hobby done");

await page.locator("//input[@id='uploadPicture']").setInputFiles("C:\\Users\\Admin\\OneDrive\\Pictures\\Screenshots\\Screenshot (1).png");
console.log("File donne")

await page.locator("//textarea[@id='currentAddress']").fill("Pune");
console.log("address done");

await page.getByRole('button',{name:'Submit'}).click();
console.log("submit done");


await page.waitForTimeout(7000);
await browser.close();

})