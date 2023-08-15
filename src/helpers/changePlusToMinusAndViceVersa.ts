const changePlusToMinusAndViceVersa = (mathExpression: string) => {
  const re = /(-\d+)|(\+\d+)|(\d+)/g;
  const match = mathExpression.match(re);
  let changedLastString = '';

  if (match) {
    let lastStr = match[match.length - 1];
    const firstSymb = lastStr[0];

    if (firstSymb === '+' || /\d/.test(firstSymb)) {
      if (firstSymb === '+') {
        lastStr = lastStr.replace(/\+/, '-');
        changedLastString = lastStr;
      } else {
        const lastStrArr = lastStr.split('');
        lastStrArr.unshift('-');
        lastStr = lastStrArr.join('');
        changedLastString = lastStr;
      }
    } else {
      lastStr = lastStr.replace(/-/, '+');
      changedLastString = lastStr;
    }
  }
  return { changedLastString, match };
};

export default changePlusToMinusAndViceVersa;
