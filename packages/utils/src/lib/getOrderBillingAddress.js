/* eslint-disable camelcase */
import getAdminOrder from './getAdminOrder';

async function getOrderBillingAddress(order) {
  const orderDetails = await getAdminOrder(order);
  const orderBillingAddress = orderDetails.billing_address;
  return orderBillingAddress;
}

export default getOrderBillingAddress;
