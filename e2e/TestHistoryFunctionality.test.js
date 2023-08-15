describe('Test history functionality for calculator', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should correct add item to the History', async () => {
    await element(by.id('1')).tap();
    await element(by.id('+')).tap();
    await element(by.id('1')).tap();
    await element(by.id('=')).tap();
    await expect(element(by.id('mathResult'))).toHaveLabel('=2');
    await element(
      by.id('TestHeaderButton-6ac68afc-c605-48d3-a4f8-fbd91aa97f63')
    ).tap();
    await expect(element(by.id('TestHistoryItemContent-1'))).toHaveText(
      '1+1 = 2'
    );
  });
  it('should correct delete item to the History', async () => {
    await element(by.id('1')).tap();
    await element(by.id('+')).tap();
    await element(by.id('1')).tap();
    await element(by.id('=')).tap();
    await expect(element(by.id('mathResult'))).toHaveLabel('=2');
    await element(
      by.id('TestHeaderButton-6ac68afc-c605-48d3-a4f8-fbd91aa97f63')
    ).tap();
    await element(by.id('TestHistoryItemButton-1')).tap();
    await waitFor(element(by.id('TestHistoryItemContent-1'))).toBeNotVisible();
  });
});
