// TODO: rename for better conventions
export default function convertToStorefrontId(id, convertString) {
  const encodedId = btoa(`gid://shopify/${convertString}/${id}`);
  if (encodedId) return encodedId;
  return null;
}
