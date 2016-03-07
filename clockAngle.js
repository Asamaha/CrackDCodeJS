//calculate the angle between the hr and the minute
// 360 degrees clock, 60 min whole hr

var angleClock = function(hour, minutes) {
  return ((hour * 30 + minute * 0.5) - (minute * 6))
}