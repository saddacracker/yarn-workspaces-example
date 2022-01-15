// TODO: add to other components
export default function displayTextureType(string) {
  const textureTypes = {
    'brcc-coffee-club-whole-bean': 'Whole Bean',
    'brcc-coffee-club-ground': 'Ground',
    'brcc-coffee-club-coffee-rounds': 'Rounds',
    'rtd-club': 'Ready To Drink',
  };

  if (typeof string !== 'string') {
    throw new Error('BRCC-Util: `displayTextureType(string)` expects a string argument.');
  }

  return Object.prototype.hasOwnProperty.call(textureTypes, string) ? textureTypes[string] : null;
}
