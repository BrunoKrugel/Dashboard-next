function unixToStampUTC(time) {
  return new Date(time * 1000).toISOString().slice(11, 16).replace('T', ' ');
}

function currentTimeZone(time, country, city) {
  let date = new Date(time * 1000).toISOString().slice(0, 19).replace('T', ' ');
  return date.toLocaleString('en-US', { timeZone: country, hour12: false });
}

module.exports.unixToStampUTC = unixToStampUTC;
module.exports.currentTimeZone = currentTimeZone;
