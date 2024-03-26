export function formateDate(isoDateString) {
  const date = new Date(isoDateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' });
}