module.exports = function gon(n) {
  var polygon = new Array(n)
  for (var i = n; i--;) {
    var angle = 360 / n * i - 90
    var radians = angle * Math.PI / 180
    polygon[i] = {
      x: Math.cos(radians),
      y: Math.sin(radians)
    }
  }
  return polygon
}
