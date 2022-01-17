export default function getParamFromUrl(param) {
  const value = new RegExp(`[?&]${param}=([^&#]*)`, 'i').exec(window.location.href);
  return value ? value[1] : null;
}
