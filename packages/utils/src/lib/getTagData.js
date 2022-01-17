const getTagData = (array, string, splitString) => {
  if (typeof array !== 'object') {
    throw new Error('BRCC-Util: `getTagData(metafields)` expects a array argument.');
  }

  if (typeof string !== 'string') {
    throw new Error('BRCC-Util: `getTagData(string)` expects a string argument.');
  }

  if (typeof splitString !== 'string') {
    throw new Error('BRCC-Util: `getTagData(splitString)` expects a string argument.');
  }

  const tagData = array.filter((arr) => arr.includes(string));
  const data = tagData[0]?.split(splitString).pop() || '';
  return data;
};

export default getTagData;
