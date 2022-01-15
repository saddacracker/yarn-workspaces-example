const subscriptionsSort = (array) => {
  if (typeof array !== 'object' || array.length === 0) {
    throw new Error('BRCC-Util: `subscriptionsSort(array)` expects a object argument.');
  }

  const activeSubscriptions = array.filter((subscription) => subscription.status === 'ACTIVE');

  activeSubscriptions.sort((a, b) => {
    if (a.next_charge_scheduled_at > b.next_charge_scheduled_at) {
      return 1;
    }
    return -1;
  });

  return activeSubscriptions;
};

export default subscriptionsSort;
