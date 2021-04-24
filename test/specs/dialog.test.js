const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("My application", () => {
  it.only("Verify", () => {
    dialog.viewBtn.click();
    driver.touchAction([
      { action: "press", x: 500, y: 1400 },
      { action: "moveTo", x: 500, y: 300 },
      "release",
    ]);
  });
});
