const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

describe("My application", () => {
  it("Test", () => {
    dialog.cancelDialogMsgBtn.click();
    expect(dialog.getDialogModalTitle()).equal(data.shortCancelDialog.title);
    dialog.dialogOkBtn.click();
  });
});
