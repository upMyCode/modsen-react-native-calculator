describe('Test math functionality for calculator', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should correct execute math plus operation', async () => {
    await element(by.id('1')).tap();
    await element(by.id('+')).tap();
    await element(by.id('1')).tap();
    await element(by.id('=')).tap();
    await expect(element(by.id('mathResult'))).toHaveLabel('=2');
  });
  it('should correct execute math minus operation', async () => {
    await element(by.id('1')).tap();
    await element(by.id('-')).tap();
    await element(by.id('1')).tap();
    await element(by.id('=')).tap();
    await expect(element(by.id('mathResult'))).toHaveLabel('=0');
  });
  it('should correct execute math division operation', async () => {
    await element(by.id('1')).tap();
    await element(by.id('/')).tap();
    await element(by.id('1')).tap();
    await element(by.id('=')).tap();
    await expect(element(by.id('mathResult'))).toHaveLabel('=1');
  });
  it('should correct execute math multiplication operation', async () => {
    await element(by.id('1')).tap();
    await element(by.id('*')).tap();
    await element(by.id('7')).tap();
    await element(by.id('=')).tap();
    await expect(element(by.id('mathResult'))).toHaveLabel('=7');
  });
  it('should correct execute math remainder of the division operation', async () => {
    await element(by.id('8')).tap();
    await element(by.id('%')).tap();
    await element(by.id('3')).tap();
    await element(by.id('=')).tap();
    await expect(element(by.id('mathResult'))).toHaveLabel('=2');
  });
  it('should correct execute math  operation with float numbers', async () => {
    await element(by.id('0')).tap();
    await element(by.id('.')).tap();
    await element(by.id('3')).tap();
    await element(by.id('+')).tap();
    await element(by.id('.')).tap();
    await element(by.id('5')).tap();
    await element(by.id('=')).tap();
    await expect(element(by.id('mathResult'))).toHaveLabel('=0.8');
  });
  it('should correct execute difficult math operation', async () => {
    await element(by.id('0')).tap();
    await element(by.id('.')).tap();
    await element(by.id('3')).tap();
    await element(by.id('+')).tap();
    await element(by.id('.')).tap();
    await element(by.id('5')).tap();
    await element(by.id('*')).tap();
    await element(by.id('(')).tap();
    await element(by.id('-')).tap();
    await element(by.id('9')).tap();
    await element(by.id(')')).tap();
    await element(by.id('/')).tap();
    await element(by.id('5')).tap();
    await element(by.id('=')).tap();
    await expect(element(by.id('mathResult'))).toHaveLabel('=-0.600');
  });
  it('should not execute by 0', async () => {
    await element(by.id('5')).tap();
    await element(by.id('/')).tap();
    await element(by.id('0')).tap();
    await element(by.id('=')).tap();
    await element(by.label('OK')).atIndex(0).tap();
    await expect(element(by.id('mathResult'))).toBeNotVisible();
  });
});
