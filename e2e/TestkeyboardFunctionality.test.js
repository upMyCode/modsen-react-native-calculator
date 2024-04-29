import { DISPLAYED_KEY_CUPS } from 'constants/keyCups';

describe('Keyboard test functionality', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should be displayed all keyboard keys', async () => {
    const KEYS_LIST = [
      '7',
      '8',
      '9',
      '4',
      '5',
      '6',
      '1',
      '2',
      '3',
      '0',
      '+',
      '-',
      '%',
      '(',
      ')',
      '.',
      '/',
      '*',
      'Ac',
      '⌫',
      '±',
      '=',
    ];

    for (let i = 0; i < KEYS_LIST.length; i += 1) {
      const keyboardItem = await element(by.id(`${KEYS_LIST[i]}`));
      await expect(keyboardItem).toBeVisible();
    }
  });
  it('should be displayed typing text to the display', async () => {
    for (let i = 0; i < DISPLAYED_KEY_CUPS.length; i += 1) {
      const keyboardItem = await element(by.id(`${DISPLAYED_KEY_CUPS[i]}`));

      await keyboardItem.tap();
    }
    await expect(element(by.id('mathExpression'))).toHaveLabel(
      '71023%8*94/(5.6)+-'
    );
  });
  it('should clear screen after click to Ac key', async () => {
    for (let i = 0; i < DISPLAYED_KEY_CUPS.length; i += 1) {
      const keyboardItem = await element(by.id(`${DISPLAYED_KEY_CUPS[i]}`));

      await keyboardItem.tap();
    }
    await expect(element(by.id('mathExpression'))).toHaveLabel(
      '71023%8*94/(5.6)+-'
    );
    await element(by.id('Ac')).tap();
    await expect(element(by.id('mathExpression'))).toHaveLabel('');
  });
  it('should delete one symbol after click to ⌫ key', async () => {
    for (let i = 0; i < DISPLAYED_KEY_CUPS.length; i += 1) {
      const keyboardItem = await element(by.id(`${DISPLAYED_KEY_CUPS[i]}`));

      await keyboardItem.tap();
    }
    await expect(element(by.id('mathExpression'))).toHaveLabel(
      '71023%8*94/(5.6)+-'
    );
    await element(by.id('⌫')).tap();
    await expect(element(by.id('mathExpression'))).toHaveLabel(
      '71023%8*94/(5.6)+'
    );
  });
  it('should displayed math result', async () => {
    await element(by.id('1')).tap();
    await element(by.id('+')).tap();
    await element(by.id('1')).tap();
    await element(by.id('=')).tap();
    await expect(element(by.id('mathResult'))).toHaveLabel('=2');
  });
  it('should change math sign for plus/minus operations', async () => {
    await element(by.id('1')).tap();
    await element(by.id('+')).tap();
    await element(by.id('1')).tap();
    await element(by.id('±')).tap();
    await element(by.id('=')).tap();
    await expect(element(by.id('mathResult'))).toHaveLabel('=0');
  });
});
