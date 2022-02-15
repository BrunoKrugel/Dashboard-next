function unixToStampUTC(string, country) {
  console.log(string);
  return new Date(string * 1000).toISOString().slice(11, 16).replace('T', ' ');
}
module.exports = unixToStampUTC;
