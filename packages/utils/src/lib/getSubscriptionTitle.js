const getSubscriptionTitle = (subcription) =>
  `${subcription.product_title.replace('- ', '')} ${
    subcription.variant_title !== 'Default Title' && subcription.variant_title !== ''
      ? ` - ${subcription.variant_title}`
      : ''
  }`;

export default getSubscriptionTitle
