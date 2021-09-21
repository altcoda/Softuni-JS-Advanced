class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    static distance(pointA, pointB) {
      let xDiff = pointA.x - pointB.x;
      let yDiff = pointA.y - pointB.y;
  
      return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }
}
