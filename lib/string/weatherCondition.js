function weatherCondition(list, weather) {
  let condition = 0;
  for (let value of list) {
    if (value.weather[0].main.toLowerCase().includes(weather)) condition++;
  }
  return condition;
}
module.exports.weatherCondition = weatherCondition;
