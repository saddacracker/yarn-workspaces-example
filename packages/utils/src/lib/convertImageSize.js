export default function convertImageSize(image, width = null, height = null, size = 'medium') {
  if (!image) return null;
  if (typeof image !== 'string') {
    throw new Error('BRCC-Util: `convertImageSize(image)` expects a string argument.');
  }
  if (typeof size !== 'string') {
    throw new Error('BRCC-Util: `convertImageSize(size)` expects a string argument.');
  }
  if (width !== null && typeof width !== 'number') {
    throw new Error('BRCC-Util: `convertImageSize(width)` expects a number or null argument.');
  }

  if (height !== null && typeof height !== 'number') {
    throw new Error('BRCC-Util: `convertImageSize(height)` expects a number or null argument.');
  }

  const imageIndex = image.lastIndexOf('.');
  const imageSizeConvert = width && height ? `${width}x${height}` : size;
  const convertedImage = `${image.substring(0, imageIndex)}_${imageSizeConvert}${image.substring(
    imageIndex,
  )}`;
  return convertedImage;
}
