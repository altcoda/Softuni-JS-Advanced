function solve(area, vol, input) {
  return JSON.parse(input).map(prism => ({
    area: area.apply(prism),
    volume: vol.apply(prism)
  }));
}
