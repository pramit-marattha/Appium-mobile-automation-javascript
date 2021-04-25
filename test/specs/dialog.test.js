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

  it("Verify the repeated checkbox options has attrib checked when it is selected", () => {
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

  it.only("Verify isEnabled, isSelected, isDisplayed", () => {
    dialog.viewBtn.click();
    driver.touchAction([
      { action: "press", x: 500, y: 1400 },
      { action: "moveTo", x: 500, y: 300 },
      "release",
      { action: "press", x: 500, y: 1400 },
      { action: "moveTo", x: 500, y: 300 },
      "release",
      { action: "press", x: 500, y: 1400 },
      { action: "moveTo", x: 500, y: 300 },
      "release",
    ]);
    dialog.tabsBtn.click();
    dialog.contentById.click();

    let isEnabled, isSelected, isDisplayed;

    for (i = 0; i < 3; i++) {
      isEnabled = dialog.tabs[i].isEnabled(); // returns true or false
      isSelected = dialog.tabs[i].isSelected(); // returns true or false
      isDisplayed = dialog.tabs[i].isDisplayed(); // returns true or false

      console.log(`Tabs : ${i + 1}`);
      console.log(`isEnabled: ${isEnabled}`);
      console.log(`isSelected: ${isSelected}`);
      console.log(`isDisplayed: ${isDisplayed}`);

      if (isEnabled && isSelected) {
        console.log(`First Tab Content ${dialog.tab1Content.isDisplayed()}`);
        console.log(`Second Tab Content ${dialog.tab2Content.isDisplayed()}`);
        console.log(`Third Tab Content ${dialog.tab3Content.isDisplayed()}`);
      }
    }
  });
});
