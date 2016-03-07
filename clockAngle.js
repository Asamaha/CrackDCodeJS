//calculate the angle between the hr and the minute
// 360 degrees clock, 60 min whole hr 360/60 = 6
// minutes degree = 360 / 12 / 60 = 0.5

var angleClock = function(hour, minute) {
  return ((hour * 30 + minute * 0.5) - (minute * 6))
}

//for negative possibilities
var angleClock = function(hour, minute) {
  return Math.abs((hour * 30 + minute * 0.5) - (minute * 6))
}

//getting min
var angleClock = function(hour, minute) {
  var result = Math.abs((hour * 30 + minute * 0.5) - (minute * 6))

  return Math.min(360 - result, result);
}