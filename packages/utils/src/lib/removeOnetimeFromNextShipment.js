const removeOnetimeFromNextShipment = async (id) => {
  const res = await fetch(`/api/subscription/onetimes/delete/${id}`);
  const data = await res.json();
  if (res.success !== 200) {
    throw Error('An error occurred while fetching the data.');
  }

  return data;
};

export default removeOnetimeFromNextShipment;
