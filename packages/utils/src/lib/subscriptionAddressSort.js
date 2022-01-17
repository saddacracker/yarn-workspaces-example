const subscriptionAddressSort = (array) => {
  if (typeof array !== 'object') {
    throw new Error('BRCC-Util: `subscriptionAddressSort(array)` expects a object argument.');
  }

  array.sort((a, b) => {
    if (a.created_at > b.created_at) {
      return 1;
    }
    return -1;
  });

  return array;
};

export default subscriptionAddressSort;
