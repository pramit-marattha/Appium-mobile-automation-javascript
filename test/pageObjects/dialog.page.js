class Dialog {
  /**
   * Define Elements
   */
  get appBtn() {
    return $("~App");
  }

  get userNameField() {
    return $(
      '//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]'
    );
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
  _weekdayCheckbox(index) {}
  // #endregion
}
module.exports = new Dialog();
