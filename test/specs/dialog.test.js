const dialog = require("../pageObjects/dialog.page");
const expect = require("chai").expect;

describe("My application Dialog", () => {
  it("Verify that username and password field is editable", () => {
    dialog.appBtn.click();
    dialog.alertDialogBtn.click();
    dialog.textFieldDialogBtn.click();
    dialog.userNameField.clearValue();
    dialog.passowrdField.clearValue();
    dialog.userNameField.addValue("Yolo");
    dialog.passowrdField.addValue("password");
    console.log(dialog.userNameField.getText());
    expect(text).equal("Yolo");
    dialog.dialogOkBtn.click();
  });
  it.only("Verify", () => {
    dialog.viewBtn.click();
    driver.touchAction([
      { action: "press", x: 500, y: 1400 },
      { action: "moveTo", x: 500, y: 300 },
      "release",
    ]);
  });
});
