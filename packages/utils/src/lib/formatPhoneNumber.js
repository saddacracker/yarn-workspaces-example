export default function formattedPhone(string) {
  if (typeof string !== 'string') {
    throw new Error('BRCC-Util: `formattedPhone(string)` expects a string argument.');
  }

  if (string) {
    return `${string.replace(/\D/g, '').slice(1, 4)}-${string.replace(/\D/g, '').slice(4, 7)}-${string.replace(/\D/g, '').slice(7, 11)}`;
  }

  return string;
}
