export function formateDate(isoDateString) {
  const date = new Date(isoDateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
}

export function roundToNearestHalf(number) {
  return Math.round(number * 2) / 2;
}

export function formatPhoneNumber(value) {
  const numbers = value.replace(/[^\d]/g, '');
  const phoneNumberMatch = numbers.match(/^(\d{0,4})(\d{0,2})(\d{0,2})(\d{0,2})$/);
  const formattedNumber = phoneNumberMatch
    ? `${phoneNumberMatch[1] ? '(' + phoneNumberMatch[1] : ''}${
        phoneNumberMatch[2] ? ') ' + phoneNumberMatch[2] : ''
      }${phoneNumberMatch[3] ? ' ' + phoneNumberMatch[3] : ''}${
        phoneNumberMatch[4] ? ' ' + phoneNumberMatch[4] : ''
      }`
    : '';
  return formattedNumber.trim();
};

export function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k'; // Keep one decimal place for thousands
  } else {
    return num.toString();
  }
}