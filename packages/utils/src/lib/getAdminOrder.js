import convertToAdminId from './convertToAdminId';

async function getOrder(orderId) {
  const orderResponse = await fetch(`/api/order/${orderId}`);
  const order = await orderResponse.json();
  if (orderResponse.status !== 200) {
    return null;
  }
  return order;
}

async function getAdminOrder(order) {
  const convertedOrderId = convertToAdminId(order.id);
  const convertedOrder = await getOrder(convertedOrderId);

  return convertedOrder;
}

export default getAdminOrder;
