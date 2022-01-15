export default function currencyFormat(currency, num) {
  if (typeof currency !== 'string') {
    throw new Error('BRCC-Util: `currencyFormat(currency)` expects a string argument of either USD or CAD');
  }

  if (typeof num !== 'number') {
    throw new Error('BRCC-Util: `currencyFormat(currency)` expects a string argument.');
  }

  const nation = {
    CAD: 'en-CA',
    USD: 'en-US',
  };

  const currencyConversion = new Intl.NumberFormat(nation[currency], { style: 'currency', currency });
  const formattedCurrency = currencyConversion.format(num);

  if (Number.isNaN(num)) {
    return '';
  }

  if (num === 0) {
    return 'Free';
  }

  return formattedCurrency;
}
