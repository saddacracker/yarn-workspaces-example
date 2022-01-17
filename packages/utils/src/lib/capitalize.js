export function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error('BRCC-Util: `capitalize(string)` expects a string argument.');
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalize;