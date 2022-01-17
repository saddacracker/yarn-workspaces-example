import convertToAdminId from './convertToAdminId';

export const checkForSubscriptions = (order) =>
  order.lineItems.some((lineItem) => lineItem.variant?.sku.includes('BRCC-CC'));

export const buildOrderBuyAgainLink = (order) => {
  const filteredOrders = order.lineItems.filter((lineItem) => lineItem.variant?.id);
  const linkArray = filteredOrders
    .map((lineItem) => `${convertToAdminId(lineItem.variant?.id)}:${lineItem.currentQuantity}`)
    .join(',');

  return `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/cart/${linkArray}`;
};

export default function showOrHideOrderBuyAgainButton(order) {
  const orderHasSubscriptions = checkForSubscriptions(order);
  if (!orderHasSubscriptions) {
    return buildOrderBuyAgainLink(order);
  }
  return null;
}
