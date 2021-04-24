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
  it("Verify the app adjust when the orientation is switched", () => {
    driver.getOrientation();
    driver.setOrientation("LANDSCAPE");
    driver.pause(1000);
    driver.saveScreenshot("./screenshots/test.png");
    driver.back();
  });

  it("Verify Timeouts", () => {
    driver.setImplicitTimeout(10000);
    driver.setTimeouts(10000);
    driver.pause(10000);
    dialog.viewBtn.click();
  });

  it.only("Verify the repeated checkbox options has attrib checked when it is selected", () => {
    let isChecked, checkday;
    dialog.appBtn.click();
    dialog.alertDialogBtn.click();
    dialog.repeatAlarmBtn.click();
    let checkDay = dialog._weekdayCheckbox(6).getText();
    expect(checkDay).equal("Every Sunday");
    console.log(checkDay);
    let isChecked = dialog._weekdayCheckbox(0).getAttribute("checked");
    expect(isChecked).equal("false");

    dialog._weekdayCheckbox(6).getText();
    let isChecked = dialog._weekdayCheckbox(0).getAttribute("checked");
    expect(isChecked).equal("true");
  });

  it("Verify", () => {
    dialog.viewBtn.click();
    driver.touchAction([
      { action: "press", x: 500, y: 1400 },
      { action: "moveTo", x: 500, y: 300 },
      "release",
    ]);
  });
});
