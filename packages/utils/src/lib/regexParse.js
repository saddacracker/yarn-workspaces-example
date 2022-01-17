const regexParseImage = (string) => {
  if (typeof string !== 'string') {
    throw new Error('BRCC-Util: `regexParseImage(string)` expects a string argument.');
  }

  const regexImage = /<img.+src=(?:"|')(.+?)(?:"|')(?:.+?)>/;
  const img = string.match(regexImage)[1];
  return img;
};

const regexParseAlt = (string) => {
  if (typeof string !== 'string') {
    throw new Error('BRCC-Util: `regexParseImage(string)` expects a string argument.');
  }

  const regexAlt = /<img.+alt=(?:"|')(.+?)(?:"|')(?:.+?)>/;
  const alt = string.match(regexAlt)[1];
  return alt;
};

export { regexParseImage, regexParseAlt };
