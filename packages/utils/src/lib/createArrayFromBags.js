// TODO: add to other components
export default function createArrayFromBags(string) {
  const bagTypes = {
    '1 Bag': 1,
    '2 Bags': 2,
    '3 Bags': 3,
    '4 Bags': 4,
    '5 Bags': 5,
    '6 Bags': 6,
    '1 Box': 1,
    '2 Boxes': 2,
    '3 Boxes': 3,
    '4 Boxes': 4,
    '5 Boxes': 5,
    '6 Boxes': 6,
  };

  if (typeof string !== 'string') {
    throw new Error('BRCC-Util: `createArrayFromBags(string)` expects a string argument.');
  }

  const bagArray = Object.prototype.hasOwnProperty.call(bagTypes, string) ? bagTypes[string] : 1;
  const emptyBagArray = Array(bagArray).fill(bagArray);
  return emptyBagArray;
}
