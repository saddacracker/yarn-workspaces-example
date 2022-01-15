// TODO: rename for better conventions
export default function convertToAdminId(id) {
  if (!id) return null;
  if (/^[0-9]+$/.test(id)) {
    // Skip if ID is already converted
    return id;
  }

  const decodedId = atob(id);
  const adminId = decodedId.match(/[0-9]+/g);

  if (adminId && adminId.length > 0) return adminId[0];

  return null;
}
