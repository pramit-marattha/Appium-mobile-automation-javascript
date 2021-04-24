class Dialog {
  /**
   * Define Elements
   */
  get appBtn() {
    return $("~App");
  }
  // two dollar sign for multiple elements
  get alertDialogBtn() {
    return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
  }

  get textFieldDialogBtn() {
    return $('//android.widget.Button[@content-desc="Text Entry dialog"]');
  }
  get passowrdField() {
    return $(
      '//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]'
    );
  }
  get userNameField() {
    return $(
      '//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]'
    );
  }
  get dialogOkBtn() {
    return $('//android.widget.Button[@resource-id="android:id/button1"]');
  }
  get dialogCancelBtn() {
    return $('//android.widget.Button[@resource-id="android:id/button2"]');
  }

  get everySundayBtn() {
    return $('//android.widget.CheckedTextView[@index="6"]');
  }
  get everyMondayBtn() {
    return $('//android.widget.CheckedTextView[@index="0"]');
  }
  get everyTuesdayBtn() {
    return $('//android.widget.CheckedTextView[@index="1"]');
  }
  get everyWednesdayBtn() {
    return $('//android.widget.CheckedTextView[@index="2"]');
  }
  get everyThursdayBtn() {
    return $('//android.widget.CheckedTextView[@index="3"]');
  }
  get everyFridayBtn() {
    return $('//android.widget.CheckedTextView[@index="4"]');
  }
  get everySaturdayBtn() {
    return $('//android.widget.CheckedTextView[@index="5"]');
  }

  get allDays() {
    return $$("//android.widget.CheckedTextView");
  }

  get viewBtn() {
    return $('//android.widget.TextView[@content-desc="Views"]');
  }
  _weekdayCheckbox(index) {}
  // #endregion
}
module.exports = new Dialog();
