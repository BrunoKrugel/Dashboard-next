function unixToStampUTC(time) {
  return new Date(time * 1000).toISOString().slice(11, 16).replace('T', ' ');
}
module.exports.unixToStampUTC = unixToStampUTC;

function currentTimeZone(time, country) {
  let date = new Date(time * 1000).toISOString().slice(0, 19).replace('T', ' ');
  return date.toLocaleString('en-US', { timeZone: country, hour12: false });
}
module.exports.currentTimeZone = currentTimeZone;
