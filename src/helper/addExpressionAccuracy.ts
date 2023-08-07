const addAccuracyForExpression = (expression: string, accuracy: number) => {
  const periodIndex = expression.indexOf('.');
  const isExponentForm = /[e]/.test(expression);

  if (isExponentForm) return expression;
  if (periodIndex === -1) return expression;

  let resultExpression = '';
  let expressionBeforePeriod = '';
  let expressionAfterPeriod = '';

  for (let i = 0; i < periodIndex; i += 1) {
    expressionBeforePeriod += expression[i];
  }

  for (let j = periodIndex; j < expression.length; j += 1) {
    expressionAfterPeriod += expression[j];
  }

  expressionAfterPeriod = expressionAfterPeriod.slice(0, accuracy);

  resultExpression = `${expressionBeforePeriod}${expressionAfterPeriod}`;

  return resultExpression;
};

export default addAccuracyForExpression;
