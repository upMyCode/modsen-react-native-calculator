describe('Test Header buttons functionality for calculator', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should visible settings button on the main screen', async () => {
    await expect(
      element(by.id('TestHeaderButton-6ac68afc-c605-48d3-a4f8-fbd91aa97f63'))
    ).toBeVisible();
  });
  it('should visible change theme color on the History screen', async () => {
    await element(
      by.id('TestHeaderButton-6ac68afc-c605-48d3-a4f8-fbd91aa97f63')
    ).tap();
    await expect(
      element(by.id('TestHeaderButton-9ac68afc-c605-48d3-a4f8-fbd91aa97f63'))
    ).toBeVisible();
  });
  it('should go to the history screen after tap to Settings button', async () => {
    await expect(
      element(by.id('TestHeaderTitle-Modsen Calculator'))
    ).toHaveText('Modsen Calculator');
    await element(
      by.id('TestHeaderButton-6ac68afc-c605-48d3-a4f8-fbd91aa97f63')
    ).tap();
    await expect(element(by.id('TestHeaderTitle-History'))).toHaveText(
      'History'
    );

    if (device.getPlatform() === 'android') {
      await device.pressBack();
    } else {
      await element(by.id('TestHistoryScreen')).swipe(
        'right',
        'fast',
        0.75,
        0.1,
        0.1
      );
    }

    await expect(
      element(by.id('TestHeaderTitle-Modsen Calculator'))
    ).toHaveText('Modsen Calculator');
  });
  it('should clear all expressions and history after tap to the bin', async () => {
    await element(by.id('1')).tap();
    await element(by.id('+')).tap();
    await element(by.id('1')).tap();
    await element(by.id('=')).tap();
    await expect(element(by.id('mathResult'))).toHaveLabel('=2');
    await element(
      by.id('TestHeaderButton-6ac68afc-c605-48d3-a4f8-fbd91aa97f63')
    ).tap();
    await expect(element(by.id('TestHeaderTitle-History'))).toHaveText(
      'History'
    );
    await expect(element(by.id('TestHistoryItemContent-1'))).toHaveText(
      '1+1 = 2'
    );
    await element(
      by.id('TestHeaderButton-5ac68afc-c605-48d3-a4f8-fbd91aa97f63')
    ).tap();

    if (device.getPlatform() === 'android') {
      await device.pressBack();
    } else {
      await element(by.id('TestHistoryScreen')).swipe(
        'right',
        'fast',
        0.75,
        0.1,
        0.1
      );
    }

    await expect(
      element(by.id('TestHeaderTitle-Modsen Calculator'))
    ).toHaveText('Modsen Calculator');
    await expect(element(by.id('mathResult'))).toBeNotVisible();
    await expect(element(by.id('mathExpression'))).toHaveLabel('');
  });
});
