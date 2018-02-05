function ngon(n, size = 1) {
  const polygon = [];
  for (let i = n; i--; ) {
    polygon[i] = {
      x: Math.cos(2*Math.PI * i/n) * size,
      y: Math.sin(2*Math.PI * i/n) * size
    };
  }
  return polygon;
}

function ngonVec(n, size = 1) {
  const polygon = [];
  for (let i = n; i--; ) {
    polygon[i] = [
      Math.cos(2*Math.PI * i/n) * size,
      Math.sin(2*Math.PI * i/n) * size
    ];
  }

  return polygon;
}

module.exports = {
  ngon,
  ngonVec
};