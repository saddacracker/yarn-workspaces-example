/* eslint-disable camelcase */
import getAdminOrder from './getAdminOrder';

function convertFulfillmentStatus(fulfillmentStatus) {
  const orderFulfillmentMap = {
    confirmed: 'Processing',
    in_transit: 'In Transit',
    out_for_delivery: 'Out For Delivery',
    delivered: 'Delivered',
  };

  return Object.prototype.hasOwnProperty.call(orderFulfillmentMap, fulfillmentStatus) ? orderFulfillmentMap[fulfillmentStatus] : 'Unfulfilled';
}

export async function getOrderFulfillmentStatus(order) {
  const { fulfillments } = await getAdminOrder(order);

  if (fulfillments.length > 0) {
    const fulfillment = fulfillments[0];
    return convertFulfillmentStatus(fulfillment.shipment_status);
  }
  return 'Unfulfilled';
}

export async function getOrderShippingMethod(order) {
  const { shipping_lines, fulfillments } = await getAdminOrder(order);

  if (shipping_lines.length > 0) {
    const fulfillmentCarrier = fulfillments[0]?.tracking_company || '';
    const shippingTitle = `${fulfillmentCarrier} ${shipping_lines[0].title}` || '';
    const shippingPrice = `$${shipping_lines[0].price}` || '';
    return { shippingTitle, shippingPrice };
  }

  return 'Unfulfilled';
}
