import convertToAdminId from './convertToAdminId';

export default function buildItemBuyAgainLink(variant, quantity) {
  if (!variant?.sku.includes('BRCC-CC') && variant?.id) {
    return `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/cart/${convertToAdminId(variant.id)}:${quantity}`;
  }
  return false;
}
