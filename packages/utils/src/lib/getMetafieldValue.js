const getMetafieldValue = (metafields, key) => {
  if (typeof metafields !== 'object') {
    throw new Error('BRCC-Util: `getMetafieldValue(metafields)` expects a array argument.');
  }

  if (typeof key !== 'string') {
    throw new Error('BRCC-Util: `getMetafieldValue(key)` expects a string argument.');
  }
  const metafieldValue = metafields.find((metafield) => metafield.key === key)?.value || null;

  return metafieldValue;
};

export default getMetafieldValue;
